import React, { useState, useEffect } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/lesser-dark.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import dynamic from 'next/dynamic';

import styles from "@/app/page.module.css";

const DynamicControlledEditor = dynamic(() => import('react-codemirror2').then(mod => mod.Controlled), { ssr: false });

const DynamicFontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then(mod => mod.FontAwesomeIcon), { ssr: false });
const DynamicFaCompressAlt = dynamic(() => import('@fortawesome/free-solid-svg-icons').then(mod => mod.faCompressAlt), { ssr: false });
const DynamicFaExpandAlt = dynamic(() => import('@fortawesome/free-solid-svg-icons').then(mod => mod.faExpandAlt), { ssr: false });



export default function Editor(props) {
  const {
    language,
    windowType,
    value,
    onChange,
    editorWidth = "100%",
    editorHeight = "100%",
  } = props;

  const [open, setOpen] = useState(true);
  const [userAgent, setUserAgent] = useState("");

  function handleChange(editor, data, value) {
    onChange(value);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAgent(window.navigator.userAgent);
    }
  }, []);

  return (
    <div
      className={`${styles.editorContainer} ${open ? "" : styles.collapsed}`}
      style={{ width: editorWidth, height: editorHeight }}
    >
      <div className={styles.editorType}>
        {windowType}
        <button
          type="button"
          className={styles.expandCollapseBtn}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <DynamicFontAwesomeIcon icon={open ? DynamicFaCompressAlt : DynamicFaExpandAlt} />
        </button>
      </div>
      <DynamicControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className={styles.codeMirrorWrapper}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "lesser-dark",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
