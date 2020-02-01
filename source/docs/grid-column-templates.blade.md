---
extends: _layouts.documentation
title: "Grid Column Templates"
description: "Utilities for controlling column templates in grids"
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

@include('_partials.class-table', [
  'scroll' => true,
  'rows' => collect([
    ['grid-cols', ['grid-template-columns']],
  ])->flatMap(function ($side) use ($page) {
    return $page->config['theme']['gridTemplateColumns']->map(function ($value, $name) use ($side) {
      $class = starts_with($name, '-')
        ? ".-{$side[0]}-".substr($name, 1)
        : ".{$side[0]}-{$name}";
      $code = collect($side[1])->map(function ($property) use ($value) {
        return "{$property}: {$value};";
      })->implode("\n");
      return [$class, $code];
    })->values();
  })
])
