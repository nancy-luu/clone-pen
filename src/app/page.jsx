"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import useLocalStorage from "@/hooks/useLocalStorage";
import dynamic from "next/dynamic";
import { renderToStaticMarkup } from "react-dom/server"; 
import Styles from "@/components/Styles"; 


// Dynamic imports for client-side components
// Handle navigate is not defined error
const DynamicGoldfish = dynamic(() => import("../components/Goldfish"), { ssr: false });
const DynamicCollection = dynamic(() => import("../components/Collection"), { ssr: false });

export default function Home() {
  const initialHtml = renderToStaticMarkup(<DynamicGoldfish />); 
  const [html, setHtml] = useLocalStorage("html", initialHtml);
  const [css, setCss] = useLocalStorage("css", Styles); 
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
    setCss(Styles); 
    setJs(`console.log('Hello World!');`);
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
      <DynamicCollection
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
