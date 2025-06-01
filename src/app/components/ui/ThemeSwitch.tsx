"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./ThemeSwitch.module.css";
export default function ThemeSwitch() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isOn) {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light"); // Remove "light" if you don't use it as base class
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light"); // Add 'light' if you use it as base class
    }
    localStorage.setItem("theme-preference", isOn ? "dark" : "light");
  }, [isOn]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-preference");
    const htmlElement = document.documentElement;

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
