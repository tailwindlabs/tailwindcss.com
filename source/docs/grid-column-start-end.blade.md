---
extends: _layouts.documentation
title: "Grid Column Start / End"
description: "Utilities for controlling the start and end position of columns in grids"
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

@include('_partials.class-table', [
  'scroll' => true,
  'rows' => collect([
    ['col-start', ['grid-column-start']],
    ['col-end', ['grid-column-end']],
  ])->flatMap(function ($side) use ($page) {
    return $page->config['theme']['gridColumnStart']->map(function ($value, $name) use ($side) {
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
