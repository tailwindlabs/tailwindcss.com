import { shell, Page, Step, Tile, css, js, html } from "./utils";
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
                <p>The steps in this guide will work not only for Blazor, but for any .NET Web project including: MVC, Razor Pages and WebForms.</p>
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
        title: 'Install the Tailwind integration plugin',
        body: (
          <>
            <p>The Tailwind integration is composed by 2 packages:</p>
            <ol>
              <li><strong>Tailwind.Hosting: </strong>Add support for HotReload when you execute <code>dotnet watch</code></li>
              <li>
                <strong>Tailwind.Hosting.Build: </strong>
                <span>Integrates with the MsBuild compiler, so it will automatically setup the tailwindcss as well generate publish ready output on </span>
                <code>dotnet publish</code>
              </li>
            </ol>

            <i>
              <span>This packages uses the .NET conventions by default, consider have a look in the </span>
              <a href="https://github.com/kallebysantos/tailwind-dotnet">official plugin repo</a>
              <span> for a detailed set of options that you customise.</span>
            </i>
          </>
        ),
        code: {
            name: "Terminal",
            lang: "shell",
            code: shell`
        dotnet add package Tailwind.Hosting
        dotnet add package Tailwind.Hosting.Build
      `,
        },
    },
    {
        title: 'Enable Hot Reload',
        body: (
          <>
            <p>In order to support <code>dontet watch</code> you need to add the following settings to your launch profile.</p>
          </>
        ),
        code: {
            name: "Properties/launchSettings.json",
            lang: "js",
            code: js`
            {
            "$schema": "https://json.schemastore.org/launchsettings.json",
            "profiles": {
              "http": {
                "commandName": "Project",
                "dotnetRunMessages": true,
                "launchBrowser": true,
                "applicationUrl": "http://localhost:5164",
                "environmentVariables": {
                  "ASPNETCORE_ENVIRONMENT": "Development",
                  // [!code highlight:2]
                  "ASPNETCORE_HOSTINGSTARTUPASSEMBLIES": "Tailwind.Hosting"
                }
              },
              "https": {
                "commandName": "Project",
                "dotnetRunMessages": true,
                "launchBrowser": true,
                "applicationUrl": "https://localhost:7207;http://localhost:5164",
                "environmentVariables": {
                  "ASPNETCORE_ENVIRONMENT": "Development",
                  // [!code highlight:2]
                  "ASPNETCORE_HOSTINGSTARTUPASSEMBLIES": "Tailwind.Hosting"
                }
              }
            }
          }`
      },
    },
    {
        title: 'Create a new CSS file',
        body: (
            <p>
                Create a new stylesheet at <code>wwwroot/styles.css</code>
            </p>
        ),
        code: {
            name: "Terminal",
            lang: "shell",
            code: shell`
        touch wwwroot/styles.css
      `,
        },
    },
    {
        title: 'Import Tailwind CSS',
        body: (
            <p>Add an <code>@import</code> to <code>wwwroot/styles.css</code> that imports Tailwind CSS.</p>
        ),
        code: {
            name: "wwwroot/styles.css",
            lang: "css",
            code: css`
                @import "tailwindcss";
            `
        }
    },
    {
        title: 'Link to the ouput CSS file',
        body: (
      <>
        <p>By default the compiler will generate an <code>wwwroot/app.css</code> that is already linked in .NET Template,
        you find it in your <code>Components/App.razor</code></p>
      </>
            
        ),
        code: {
            name: 'Components/App.razor',
            lang: 'html',
            code: html`
              <!-- For .NET 9+ -->
              <link rel="stylesheet" href="@Assets["app.css"]" />

              <!-- For .NET 8 -->
              <link rel="stylesheet" href="app.css" />
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
        title: 'Windows users with .NET 9 installed',
        body: (
          <>
            <p>At this moment the there's a bug in .NET 9 compiler for windows that prevents <code>wwwroot/app.css</code> to be rebuild</p>
            <p>In order to solve the <i>fingerprinting</i> error, you must include the following lines to your <code>.csproj</code></p>
          </>
        ),
        code: {
            name: 'MyApp.csproj',
            lang: 'xml',
            code: html`
        <Target Name="CleanUpTailwindStaticCache" BeforeTargets="PrepareForBuild" >
            <ItemGroup>
                <Content Remove="$(TailwindOutputCssFile)"/>
            </ItemGroup>
        </Target>
      `,
        },
    },
    {
        title: 'Start the application',
        body: (
            <p>
                Build the project and start the application with <code>dotnet watch</code> or from your IDE start button.
            </p>
        ),
        code: {
            name: 'Terminal',
            lang: 'shell',
            code: shell`
                dotnet watch
            `,
        },
    },
];
