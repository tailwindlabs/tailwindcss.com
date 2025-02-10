"use client";

import { useEffect } from "react";
import { THEME_INJECT } from "./theme-inject";

export function ThemeFix() {
  useEffect(() => {
    if (!("_updateTheme" in window)) {
      console.log("ThemeFix");
      eval(THEME_INJECT);
    }
  });

  return null;
}
