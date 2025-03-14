import {shell, Page, Step, Tile, css, xml, html} from "./utils";
import Logo from "@/docs/img/guides/dotnet.react.svg";
import LogoDark from "@/docs/img/guides/dotnet-white.react.svg";

export let tile: Tile = {
    title: ".NET",
    description: "An open-source, cross-platform framework for building modern apps and powerful cloud services.",
    Logo,
    LogoDark
};

export let page: Page = {
    title: "Install Tailwind CSS with .NET",
    description: "Setting up Tailwind CSS in a .NET project.",
};

export let steps: Step[] = [
    {
        title: "Create your project",
        body: (
            <>
                <p>Start by creating a new .NET Blazor project if you don’t have one set up already.</p>
                <p>The steps in this guide will work not only for Blazor, but for any .NET Web project.</p>
            </>
        ),
        code: {
            name: "Terminal",
            lang: "shell",
            code: shell`
        dotnet new blazor --empty -n my-app
      `,
        },
    },
    {
        title: 'Create a new CSS file',
        body: (
            <p>
                Create a new stylesheet at <code>Styles/main.css</code>
            </p>
        ),
        code: {
            name: "Terminal",
            lang: "shell",
            code: shell`
        mkdir Styles && touch Styles/main.css
      `,
        },
    },
    {
        title: 'Import Tailwind CSS',
        body: (
            <p>Add an <code>@import</code> to <code>Styles/main.css</code> that imports Tailwind CSS.</p>
        ),
        code: {
            name: "Styles/main.css",
            lang: "css",
            code: css`
                @import "tailwindcss";
            `
        }
    },
    {
        title: 'Configure the project',
        body: (
            <>
                <p>Add a file called <code>Tailwind.targets</code> at the root of the project.</p>
                <p>This file declares MSBuild targets that download the Tailwind CLI, and build the stylesheets as part of <code>dotnet build</code>.</p>
            </>
        ),
        code: {
            name: "Tailwind.targets",
            lang: "xml",
            code: `<Project ToolsVersion="15.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <PropertyGroup>
    <!-- Specify which version of Tailwind to download -->
    <TailwindVersion>v4.0.14</TailwindVersion>

    <!-- Provide the path to the input & output stylesheets -->
    <InputStyleSheetPath>Styles/main.css</InputStyleSheetPath>
    <OutputStyleSheetPath>wwwroot/main.build.css</OutputStyleSheetPath>

    <!-- Provide the path to where Tailwind should be downloaded to -->
    <!-- This should be a path that is writable by the current user, as well as one that is accessible in CI/CD pipelines -->
    <!-- On Linux and MacOS, use $XDG_CACHE_HOME or $HOME/.cache ($HOME/.cache/Tailwind/<TailwindVersion>) -->
    <TailwindDownloadPath Condition="$([System.OperatingSystem]::IsLinux()) Or $([System.OperatingSystem]::IsMacOS())">$([System.IO.Path]::Combine($([MSBuild]::ValueOrDefault($([System.Environment]::GetEnvironmentVariable('XDG_CONFIG_HOME')), $([System.IO.Path]::Combine($([System.Environment]::GetEnvironmentVariable('HOME')), '.cache')))), 'Tailwind'))</TailwindDownloadPath>

    <!-- On Windows, use local app data (%LOCALAPPDATA%\\Tailwind\\<TailwindVersion>) -->
    <TailwindDownloadPath Condition="$([System.OperatingSystem]::IsWindows())">$([System.IO.Path]::Combine($([System.Environment]::GetFolderPath($([System.Environment]::SpecialFolder.LocalApplicationData))), 'Tailwind'))</TailwindDownloadPath>
  </PropertyGroup>

  <!-- This line supports hot reload by instructing dotnet watch to be aware of modifications to the input stylesheet -->
  <ItemGroup>
    <Watch Include="$(InputStyleSheetPath)"/>
  </ItemGroup>

  <Target Name="DownloadTailwind">
    <PropertyGroup>
      <!-- Determine which version of Tailwind to use based on the current OS & architecture -->
      <TailwindReleaseName Condition="$([System.OperatingSystem]::IsLinux()) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == X64">tailwindcss-linux-x64</TailwindReleaseName>
      <TailwindReleaseName Condition="$([System.OperatingSystem]::IsLinux()) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == Armv7">tailwindcss-linux-armv7</TailwindReleaseName>

      <TailwindReleaseName Condition="$([System.OperatingSystem]::IsMacOS()) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == X64">tailwindcss-macos-x64</TailwindReleaseName>
      <TailwindReleaseName Condition="$([System.OperatingSystem]::IsMacOS()) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == Arm64">tailwindcss-macos-arm64</TailwindReleaseName>

      <TailwindReleaseName Condition="$([System.OperatingSystem]::IsWindows()) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == X64">tailwindcss-windows-x64.exe</TailwindReleaseName>
      <TailwindReleaseName Condition="$([System.OperatingSystem]::IsWindows()) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == Arm64">tailwindcss-windows-arm64.exe</TailwindReleaseName>
    </PropertyGroup>

    <!-- Download the file -->
    <DownloadFile DestinationFolder="$([System.IO.Path]::Combine('$(TailwindDownloadPath)', '$(TailwindVersion)'))"
                  DestinationFileName="$(TailwindReleaseName)"
                  SourceUrl="https://github.com/tailwindlabs/tailwindcss/releases/download/$(TailwindVersion)/$(TailwindReleaseName)"
                  SkipUnchangedFiles="true"
                  Retries="3">
      <Output TaskParameter="DownloadedFile" PropertyName="TailwindCliPath"/>
    </DownloadFile>

    <!-- On unix systems, make the file executable -->
    <Exec Condition="$([System.OperatingSystem]::IsLinux()) Or $([System.OperatingSystem]::IsMacOS())" Command="chmod +x '$(TailwindCliPath)'"/>
  </Target>

  <!-- When building the project, run the Tailwind CLI -->
  <!-- This target can also be executed manually. For example, with dotnet watch: \`dotnet watch msbuild /t:Tailwind\` -->
  <!-- In order to use hot reload, run both \`dotnet watch run\` and \`dotnet watch msbuild /t:Tailwind\` -->
  <Target Name="Tailwind" DependsOnTargets="DownloadTailwind" BeforeTargets="Build">
    <PropertyGroup>
      <TailwindBuildCommand>'$(TailwindCliPath)' -i '$(InputStyleSheetPath)' -o '$(OutputStyleSheetPath)'</TailwindBuildCommand>
    </PropertyGroup>

    <Exec Command="$(TailwindBuildCommand)" Condition="'$(Configuration)' == 'Debug'"/>
    <Exec Command="$(TailwindBuildCommand) --minify" Condition="'$(Configuration)' == 'Release'"/>
  </Target>
</Project>`
        }
    },
    {
        title: 'Configure your csproj',
        body: (
            <p>
                Open the <code>my-app.csproj</code> file and import the <code>Tailwind.targets</code> file.
            </p>
        ),
        code: {
            name: 'my-app.csproj',
            lang: 'xml',
            code: `<Import Project="Tailwind.targets" />`,
        },
    },

    {
        title: 'Link to the generated CSS file',
        body: (
            <p>
                Add a reference to the CSS file Tailwind generated to the <code>head</code> of
                the <code>Components/App.razor</code> file.
            </p>
        ),
        code: {
            name: 'Components/App.razor',
            lang: 'html',
            code: html`
                <link rel="stylesheet" href="/main.build.css"/>
            `,
        },
    },

    {
        title: 'Start using Tailwind in your project',
        body: (
            <p>Start using Tailwind’s utility classes to style your content.</p>
        ),
        code: {
            name: 'Components/Pages/Home.razor',
            lang: 'html',
            code: `<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`,
        },
    },

    {
        title: 'Start the application',
        body: (
            <p>
                Build the project and start the application with <code>dotnet run</code>.
            </p>
        ),
        code: {
            name: 'Terminal',
            lang: 'shell',
            code: shell`
                dotnet run
            `,
        },
    },
];
