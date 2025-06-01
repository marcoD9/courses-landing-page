"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./ThemeSwitch.module.css";
export default function ThemeSwitch() {
  const [isOn, setIsOn] = useState(false);

  // useEffect to switch theme
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isOn) {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light"); // Remove "light" if you don't use it as default class
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light"); // Add 'light' if you use it as default class
    }
    localStorage.setItem("theme-preference", isOn ? "dark" : "light");
  }, [isOn]); // Update every time the switch is toggled

  // useEffect to check the default theme to apply
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-preference");
    const htmlElement = document.documentElement;
    // Set the theme depending on browser setting
    if (savedTheme) {
      setIsOn(savedTheme === "dark");
      if (savedTheme === "dark") {
        htmlElement.classList.add("dark");
        htmlElement.classList.remove("light");
      } else {
        htmlElement.classList.add("light");
        htmlElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsOn(true);
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      setIsOn(false);
      htmlElement.classList.add("light"); // 'light' as default if there isn't a preference
      htmlElement.classList.remove("dark");
    }
  }, []);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <button
      className={styles.container} // CSS module for styling
      onClick={toggleSwitch}
      style={{
        justifyContent: isOn ? "flex-end" : "flex-start",
        backgroundColor: isOn ? "var(--switch-bg-on)" : "var(--switch-bg-off)",
      }}
    >
      <motion.div
        className={styles.handle} // CSS module for styling
        style={{
          backgroundColor: "var(--switch-handle-color)",
        }}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </button>
  );
}
