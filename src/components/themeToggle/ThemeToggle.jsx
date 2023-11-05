"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle ,theme} = useContext(ThemeContext);

  return (
    <div 
    style={
      theme === "dark"
        ? {  backgroundColor: "white" }
        : { right: 1, backgroundColor: "#0f172a" }
    } className={styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="" height={14} width={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" height={14} width={14} />
    </div>
  );
};

export default ThemeToggle;
