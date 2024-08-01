// pages/index.js
"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Collection from "@/components/Collection";
import useLocalStorage from "@/hooks/useLocalStorage";
import Goldfish from "@/components/Goldfish";
import GoldfishCSS from "@/components/GoldfishStyles";

// convert JSX to HTML string
import { renderToStaticMarkup } from "react-dom/server";

export default function Home() {
  const initialHtml = renderToStaticMarkup(<Goldfish />);

  const [html, setHtml] = useLocalStorage("html", initialHtml);
  const [css, setCss] = useLocalStorage("css", GoldfishCSS);
  const [js, setJs] = useLocalStorage("js", `console.log('Hello World!');`);
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 100);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const resetEditors = () => {
    setHtml("");
    setCss("");
    setJs("");
  };

  const resetDemo = () => {
    setHtml(initialHtml);
    setCss(GoldfishCSS);
    setJs(`console.log('Hello World!');`)
  };

  return (
    <main className={styles.main}>
      <h1>ClonePen</h1>
      <div className={styles.btnWrapper}>
        <button className={styles.btn} onClick={() => resetEditors()}>
          Reset
        </button>
        <button className={styles.btn} onClick={() => resetDemo()}>
          Demo
        </button>
      </div>
      <Collection
        html={html}
        setHtml={setHtml}
        css={css}
        setCss={setCss}
        js={js}
        setJs={setJs}
        srcDoc={srcDoc}
        setSrcDoc={setSrcDoc}
      />
    </main>
  );
}
