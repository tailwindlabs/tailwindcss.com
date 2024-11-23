import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { FrameworkGuideLayout } from '@/layouts/FrameworkGuideLayout'
import { Steps } from '@/components/Steps'

let steps = [
  {
    title: 'Create your project',
    body: () => (
      <>
        <p>Start by creating a new .NET Blazor project if you don’t have one set up already.</p>
        <p>The steps in this guide will work not only for Blazor, but for any .NET Web project.</p>
      </>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'dotnet new blazor --empty -n my-app\ncd my-app',
    },
  },
  {
    title: 'Create a new CSS file',
    body: () => (
      <p>
        Create a new stylesheet at <code>Styles/main.css</code>
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'mkdir Styles\ntouch Styles/main.css',
    },
  },
  {
    title: 'Add the Tailwind directives to your CSS',
    body: () => (
      <p>
        Add the <code>@tailwind</code> directives for each of Tailwind’s layers to your{' '}
        <code>./Styles/main.css</code> file.
      </p>
    ),
    code: {
      name: 'Styles/main.css',
      lang: 'css',
      code: '@tailwind base;\n@tailwind components;\n@tailwind utilities;',
    },
  },
  {
    title: 'Create the tailwind.config.js file',
    body: () => (
      <p>
        Create a file at the root of the project called <code>tailwind.config.js</code>
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'touch tailwind.config.js',
    },
  },
  {
    title: 'Configure the tailwind.config.js file',
    body: () => (
      <>
        <p>
          Add the paths to all of your template files in your <code>tailwind.config.js</code> file.
        </p>
        <p>You may have to adjust the content paths if you're not using Blazor.</p>
      </>
    ),
    code: {
      name: 'tailwind.config.js',
      lang: 'javascript',
      code: `  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./Components/**/*.razor",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`,
    },
  },
  {
    title: 'Configure your csproj',
    body: () => (
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
    <TailwindVersion>v3.4.15</TailwindVersion>

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
  <Exec Command="$(ProjectDir)/bin/$(TailwindReleaseName) -i Styles/main.css -o wwwroot/main.build.css --minify"/>
</Target>
      `,
    },
  },
  {
    title: 'Link to the generated CSS file',
    body: () => (
      <p>
        Add a reference to the CSS file Tailwind generated to the <code>head</code> of the{' '}
        <code>Components/App.razor</code> file
      </p>
    ),
    code: {
      name: 'Components/App.razor',
      lang: 'razor',
      code: '<link rel="stylesheet" href="@Assets["main.build.css"]" />',
    },
  },
  {
    title: 'Start using Tailwind in your project',
    body: () => <p>Start using Tailwind’s utility classes to style your content.</p>,
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
    body: () => (
      <p>
        Build the project and start the application with <code>dotnet run</code>.
      </p>
    ),
    code: {
      name: 'Terminal',
      lang: 'terminal',
      code: 'dotnet run',
    },
  },
]

export default function UsingDotnet({ code }) {
  return (
    <FrameworkGuideLayout
      title="Install Tailwind CSS with .NET"
      description="Setting up Tailwind CSS in a .NET project."
    >
      <Steps steps={steps} code={code} />
    </FrameworkGuideLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: highlightedCodeSnippets(steps),
    },
  }
}

UsingDotnet.layoutProps = {
  meta: {
    title: 'Install Tailwind CSS with .NET',
    description: 'Setting up Tailwind CSS in a .NET project.',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
