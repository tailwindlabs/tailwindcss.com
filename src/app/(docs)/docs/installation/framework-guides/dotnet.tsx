import { shell, Page, Step, Tile, css, html } from "./utils";
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
  <!-- This file exposes the following parameters -->
  <!-- TailwindVersion: The version of the Tailwind Standalone CLI to download. -->
  <!-- TailwindDownloadPath: The path to where to download the Tailwind Standalone CLI. This property is optional, and defaults to %LOCALAPPDATA% on Windows, and $XDG_CACHE_HOME on Linux and MacOS. -->
  <!-- TailwindInputStyleSheetPath: The path to the input stylesheet. -->
  <!-- TailwindOutputStyleSheetPath: The path to the output stylesheet. -->
  <!-- TailwindOptimizeOutputStyleSheet: Whether to optimize the output stylesheet. This property is optional, and defaults to false. -->
  <!-- TailwindMinifyOutputStyleSheet: Whether to minify the output stylesheet. This property is optional, and defaults to false when Configuration is Debug, and true when Configuration is Release. -->
  <!-- TailwindDownloadUrl: The URL to the Tailwind Standalone CLI. This property is optional, and defaults to downloading the specified version from GitHub. -->

  <!-- To override these properties, create a PropertyGroup in the csproj file -->
  <!-- For example: -->
  <!-- <PropertyGroup> -->
  <!--    <TailwindVersion>v4.0.14</TailwindVersion> -->
  <!--    <TailwindInputStyleSheetPath>Styles/main.css</TailwindVersion> -->
  <!--    <TailwindOutputStyleSheetPath>wwwroot/main.css</TailwindVersion> -->
  <!-- </PropertyGroup -->

  <PropertyGroup>
    <TailwindOptimizeOutputStyleSheet Condition="'$(TailwindOptimizeOutputStyleSheet)' == ''">false</TailwindOptimizeOutputStyleSheet>

    <TailwindMinifyOutputStyleSheet Condition="$(TailwindMinifyOutputStyleSheet) == '' And '$(Configuration)' == 'Debug'">false</TailwindMinifyOutputStyleSheet>
    <TailwindMinifyOutputStyleSheet Condition="$(TailwindMinifyOutputStyleSheet) == '' And '$(Configuration)' == 'Release'">true</TailwindMinifyOutputStyleSheet>

    <!-- The path to where Tailwind should be downloaded to -->
    <!-- This should be a path that is writable by the current user, as well as one that is accessible in CI/CD pipelines -->
    <!-- By default, this is set to the local app data folder on Windows, and $XDG_CACHE_HOME on Linux and MacOS -->

    <!-- On Linux and MacOS, use $XDG_CACHE_HOME or $HOME/.cache -->
    <TailwindDownloadPath Condition="'$(TailwindDownloadPath)' == '' And ($([System.OperatingSystem]::IsLinux()) Or $([System.OperatingSystem]::IsMacOS()))">$([MSBuild]::ValueOrDefault($([System.Environment]::GetEnvironmentVariable('XDG_CONFIG_HOME')), $([System.IO.Path]::Combine($([System.Environment]::GetEnvironmentVariable('HOME')), '.cache'))))</TailwindDownloadPath>

    <!-- On Windows, use local app data (%LOCALAPPDATA%) -->
    <TailwindDownloadPath Condition="'$(TailwindDownloadPath)' == '' And $([System.OperatingSystem]::IsWindows())">$([System.Environment]::GetFolderPath($([System.Environment]::SpecialFolder.LocalApplicationData)))</TailwindDownloadPath>
  </PropertyGroup>

  <!-- Validate the parameters before download or building -->
  <Target Name="ValidateParameters" BeforeTargets="DownloadTailwind; Tailwind">
    <!-- Ensure the version is specified -->
    <Error Condition="'$(TailwindVersion)' == ''" Text="Tailwind version not specified. Please specify the version. For example: &lt;PropertyGroup&gt;&lt;TailwindVersion&gt;v4.0.14&lt;/TailwindVersion&gt;&lt;/PropertyGroup&gt;"/>

    <!-- Ensure the input stylesheet path is specified & the file exists -->
    <Error Condition="'$(TailwindInputStyleSheetPath)' == ''" Text="Tailwind input stylesheet not specified. Please specify the path to the input stylesheet in the csproj file. For example: &lt;PropertyGroup&gt;&lt;TailwindInputStyleSheetPath&gt;Styles/main.css&lt;/TailwindInputStyleSheetPath&gt;&lt;/PropertyGroup&gt;"/>
    <Error Condition="!Exists('$(TailwindInputStyleSheetPath)')" Text="Tailwind input stylesheet '$(TailwindInputStyleSheetPath)' does not exist. Please specify a path to a stylesheet. For example: &lt;PropertyGroup&gt;&lt;TailwindInputStyleSheetPath&gt;Styles/main.css&lt;/TailwindInputStyleSheetPath&gt;&lt;/PropertyGroup&gt;"/>

    <!-- Ensure the output stylesheet path is specified -->
    <Error Condition="'$(TailwindOutputStyleSheetPath)' == ''" Text="Tailwind output stylesheet not specified. Please specify the path to the output stylesheet in the csproj file. For example: &lt;PropertyGroup&gt;&lt;TailwindOutputStyleSheetPath&gt;Styles/main.css&lt;/TailwindOutputStyleSheetPath>&lt;/PropertyGroup&gt;"/>

    <!-- Ensure the download path is specified -->
    <Error Condition="'$(TailwindDownloadPath)' == ''" Text="Tailwind download path not specified. Please specify the download path in the csproj file. For example: &lt;PropertyGroup&gt;&lt;TailwindDownloadPath&gt;/tmp&lt;/TailwindDownloadPath&gt;&lt;/PropertyGroup&gt;"/>
  </Target>

  <!-- This line supports hot reload by instructing dotnet watch to be aware of modifications to the input stylesheet -->
  <ItemGroup Condition="Exists('$(TailwindInputStyleSheetPath)')">
    <Watch Include="$(TailwindInputStyleSheetPath)"/>
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

      <TailwindDownloadUrl Condition="'$(TailwindDownloadUrl)' == '' And $(TailwindVersion) != 'latest'">https://github.com/tailwindlabs/tailwindcss/releases/download/$(TailwindVersion)/$(TailwindReleaseName)</TailwindDownloadUrl>
      <TailwindDownloadUrl Condition="'$(TailwindDownloadUrl)' == '' And $(TailwindVersion) == 'latest'">https://github.com/tailwindlabs/tailwindcss/releases/latest/download/$(TailwindReleaseName)</TailwindDownloadUrl>
    </PropertyGroup>

    <!-- Download the file -->
    <DownloadFile DestinationFolder="$([System.IO.Path]::Combine('$(TailwindDownloadPath)', 'Tailwind', '$(TailwindVersion)'))"
                  DestinationFileName="$(TailwindReleaseName)"
                  SourceUrl="$(TailwindDownloadUrl)"
                  SkipUnchangedFiles="true"
                  Retries="3">
      <Output TaskParameter="DownloadedFile" PropertyName="TailwindCliPath"/>
    </DownloadFile>

    <!-- On unix systems, make the file executable -->
    <Exec Condition="Exists('$(TailwindCliPath)') And ($([System.OperatingSystem]::IsLinux()) Or $([System.OperatingSystem]::IsMacOS()))" Command="chmod +x '$(TailwindCliPath)'"/>
  </Target>

  <!-- When building the project, run the Tailwind CLI -->
  <!-- This target can also be executed manually. For example, with dotnet watch: \`dotnet watch msbuild /t:Tailwind\` -->
  <!-- In order to use hot reload, run both \`dotnet watch run\` and \`dotnet watch msbuild /t:Tailwind\` -->
  <Target Name="Tailwind" DependsOnTargets="DownloadTailwind" BeforeTargets="Build">
    <PropertyGroup>
      <TailwindBuildCommand>'$(TailwindCliPath)' -i '$(TailwindInputStyleSheetPath)' -o '$(TailwindOutputStyleSheetPath)' --cwd '$(ProjectDir)'</TailwindBuildCommand>

      <!-- Add optimize flag if specified -->
      <TailwindBuildCommand Condition="'$(TailwindOptimizeOutputStyleSheet)' == 'true'">$(TailwindBuildCommand) --optimize</TailwindBuildCommand>

      <!-- Add minify flag if specified -->
      <TailwindBuildCommand Condition="'$(TailwindMinifyOutputStyleSheet)' == 'true'">$(TailwindBuildCommand) --minify</TailwindBuildCommand>
    </PropertyGroup>

    <Exec Command="$(TailwindBuildCommand)"/>
  </Target>
</Project>`
        }
    },
    {
        title: 'Configure your csproj',
        body: (
            <p>
                Specify the version and input & output stylesheets, and import the <code>Tailwind.targets</code> file.
            </p>
        ),
        code: {
            name: 'my-app.csproj',
            lang: 'xml',
            code: `<PropertyGroup>
    <TailwindVersion>latest</TailwindVersion>
    <TailwindInputStyleSheetPath>Styles/main.css</TailwindInputStyleSheetPath>
    <TailwindOutputStyleSheetPath>wwwroot/main.build.css</TailwindOutputStyleSheetPath>
</PropertyGroup>

<Import Project="Tailwind.targets" />`,
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
                <link rel="stylesheet" href="@Assets["main.build.css"]"/>
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
