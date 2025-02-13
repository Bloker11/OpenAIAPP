"use client"

import React from 'react'

import {BsMoonFill, BsSunFill} from "react-icons/bs"
import { useState } from 'react'

const themes = {
  dracula: "dracula",
   winter: "winter"
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter)

  const toggleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };


  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      {theme === "winter" ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
}

export default ThemeToggle