# LeetCode Auto-Clear Editor

🧹 A Tampermonkey userscript that automatically clears the LeetCode code editor when visiting a problem page — useful for avoiding accidental spoilers when returning to problems.

## ✨ Features

- Clears the code editor immediately after it loads
- Prevents flash of previously saved code
- Helps you focus on re-solving problems from scratch

## 📦 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Click this link to install the script: **[Install Script](https://raw.githubusercontent.com/hiderrick/leetcode-auto-clear/refs/heads/main/auto-clear.js)**
3. Done! Visit any LeetCode problem to see it in action.

## 🔗 Script Metadata

```js
// @name         LeetCode Auto-Clear Editor
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically clears the code editor on LeetCode problem load
// @author       Derrick Chen
// @match        https://leetcode.com/problems/*
// @grant        none
