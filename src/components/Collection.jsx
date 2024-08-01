import React, { useState, useEffect } from "react";
import Editor from "@/components/Editor";
import dynamic from 'next/dynamic';

import styles from "@/app/page.module.css";

const DynamicEditor = dynamic(() => import('@/components/Editor'), { ssr: false });

const Collection = ({ html, setHtml, css, setCss, js, setJs, srcDoc, setSrcDoc }) => {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAgent(window.navigator.userAgent);
    }
  }, []);

  return (
    <div>
      <div className={styles.editorsWrapper}>
        <DynamicEditor
          language="xml"
          windowType="HTML"
          value={html}
          onChange={setHtml}
        />
        <DynamicEditor
          language="css"
          windowType="CSS"
          value={css}
          onChange={setCss}
        />
        <DynamicEditor
          language="javascript"
          windowType="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className={styles.pane}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Collection;
