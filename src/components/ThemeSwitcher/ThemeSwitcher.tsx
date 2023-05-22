"use client";

import { SunIcon, CpuChipIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import styles from "./ThemeSwitcher.module.scss";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const getCurrentTheme = () => {
    return localStorage.getItem("theme") || "system";
  };

  return (
    <ToggleGroup.Root
      className={`${styles.theme__button__wrap}`}
      type="single"
      value={getCurrentTheme()}
    >
      <ToggleGroup.Item
        value="light"
        className={`${styles.theme__button}`}
        onClick={() => setTheme("light")}
      >
        <SunIcon className={`${styles.theme__button__icon}`} />
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="system"
        className={`${styles.theme__button}`}
        onClick={() => setTheme("system")}
      >
        <CpuChipIcon className={`${styles.theme__button__icon}`} />
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="dark"
        className={`${styles.theme__button}`}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className={`${styles.theme__button__icon}`} />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
