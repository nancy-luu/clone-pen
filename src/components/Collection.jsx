import React from "react";
import Editor from "./Editor";

import styles from "@/app/page.module.css";

const Collection = ({ html, setHtml, css, setCss, js, setJs, srcDoc, setSrcDoc }) => {
  return (
    <div>
      <div className={styles.editorsWrapper}>
        <Editor
          language="xml"
          windowType="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          windowType="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
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
