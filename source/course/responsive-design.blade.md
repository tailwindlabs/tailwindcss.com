---
extends: _layouts.course-lesson
title: "Responsive Design"
description: "Learn how to use Tailwind's responsive modifiers to design for multiple screen sizes."
titleBorder: true
hideTableOfContents: true
vimeoId: 346202233
prevUrl: "/course/the-utility-first-workflow"
prev: "The Utility-First Workflow"
nextUrl: "/course/hover-focus-and-active-styles"
next: "Hover, Focus, and Active Styles"
downloadHd: https://player.vimeo.com/external/346202233.hd.mp4?s=6b24969a4267963d993b5b92457582302635a9e6&profile_id=169&download=1
downloadSd: https://player.vimeo.com/external/346202233.sd.mp4?s=42a97e3832206b6b8558e64adab4457d0eb0f183&profile_id=165&download=1
---

## Responsive Design

In this lesson you'll learn about Tailwind's responsive modifiers to design for multiple screen sizes. 

Here's the finished HTML for what we build in this lesson:
```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="/build/tailwind.css">
</head>
<body class="bg-gray-300">
  <div class="bg-gray-100 flex">
    <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
      <div class="xl:max-w-lg xl:ml-auto">
        <img class="h-10" src="/img/logo.svg" alt="Workcation">
        <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/img/beach-work.jpg" alt="Woman workcationing on the beach">
        <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
          You can work from anywhere.
          <br class="hidden lg:inline"><span class="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
          Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div class="mt-4 sm:mt-6">
          <a href="#" class="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:text-base">Book your escape</a>
        </div>
      </div>
    </div>
    <div class="hidden lg:block lg:w-1/2 lg:relative">
      <img class="absolute inset-0 h-full w-full object-cover object-center" src="/img/beach-work.jpg" alt="Woman workcationing on the beach">
    </div>
  </div>
</body>
</html>
```
