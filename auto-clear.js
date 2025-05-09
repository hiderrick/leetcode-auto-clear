// ==UserScript==
// @name         LeetCode Auto-Clear Editor
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically clears the code editor on LeetCode problem load
// @author       Derrick Chen
// @match        https://leetcode.com/problems/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // waits until the editor loads
    const waitForEditor = setInterval(() => {
        const editorContainer = document.querySelector('.monaco-editor');
        if (editorContainer && window.monaco) {
            try {
                const editor = window.monaco.editor.getEditors()[0];
                if (editor) {
                    editor.setValue(''); // clears the code
                    clearInterval(waitForEditor);
                }
            } catch (err) {
                console.error('Failed to clear LeetCode editor:', err);
            }
        }
    }, 500); // checks every 500ms
})();
