import {shell, Page, Step, Tile, css, html} from "./utils";
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
            <p>Add an <code>@import</code> to <code>./src/styles.css</code> that imports Tailwind CSS.</p>
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
        title: 'Configure your csproj',
        body: (
            <p>
                Open the <code>my-app.csproj</code> file and add the following targets.
            </p>
        ),
        code: {
            name: 'my-app.csproj',
            lang: 'xml',
            code: `<Target Name="Download Tailwind">
  <PropertyGroup>
    <!-- Which version of the CLI to download -->
    <TailwindVersion>v4.0.2</TailwindVersion>
    
    <!-- Determine which version of tailwind to use based on the current OS & architecture -->
    <!-- Linux -->
    <TailwindReleaseName Condition="$([MSBuild]::IsOsPlatform('Linux')) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == X64">tailwindcss-linux-x64</TailwindReleaseName>
    <TailwindReleaseName Condition="$([MSBuild]::IsOsPlatform('Linux')) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == Armv7">tailwindcss-linux-armv7</TailwindReleaseName>
    
    <!-- MacOS -->
    <TailwindReleaseName Condition="$([MSBuild]::IsOsPlatform('OSX')) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == X64">tailwindcss-macos-x64</TailwindReleaseName>
    <TailwindReleaseName Condition="$([MSBuild]::IsOsPlatform('OSX')) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == Arm64">tailwindcss-macos-arm64</TailwindReleaseName>
    
    <!-- Windows -->
    <TailwindReleaseName Condition="$([MSBuild]::IsOsPlatform('Windows')) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == X64">tailwindcss-windows-x64.exe</TailwindReleaseName>
    <TailwindReleaseName Condition="$([MSBuild]::IsOsPlatform('Windows')) And $([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture) == Arm64">tailwindcss-windows-arm64.exe</TailwindReleaseName>
  </PropertyGroup>
  
  <!-- Download the file -->
  <DownloadFile DestinationFolder="$(ProjectDir)/bin"
                DestinationFileName="$(TailwindReleaseName)"
                SourceUrl="https://github.com/tailwindlabs/tailwindcss/releases/download/$(TailwindVersion)/$(TailwindReleaseName)"/>
  <!-- On unix systems, make the file executable -->
  <Exec Condition="$([MSBuild]::IsOsPlatform('Linux')) Or $([MSBuild]::IsOsPlatform('OSX'))" Command="chmod +x $(ProjectDir)/bin/$(TailwindReleaseName)"/>
</Target>

<!-- When building the project, run the tailwind CLI -->
<Target Name="Tailwind" DependsOnTargets="Download Tailwind" BeforeTargets="Build">
  <PropertyGroup>
    <TailwindBuildCommand>$(ProjectDir)/bin/$(TailwindReleaseName) -i Styles/main.css -o wwwroot/main.build.css</TailwindBuildCommand>
  </PropertyGroup>
  
  <Exec Command="$(TailwindBuildCommand)" Condition="'$(Configuration)' == 'Debug'" />
  <Exec Command="$(TailwindBuildCommand) --minify" Condition="'$(Configuration)' == 'Release'" />
</Target>
`,
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
