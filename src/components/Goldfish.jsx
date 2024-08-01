import React from "react";

// Styles
import './GoldfishStyles.js'

export default function Goldfish () {
  return (
    <div className="example-window">
     <div class="example-container">
      <div class="bubble"></div>
      <div class="head">
        <div class="eye left">
           <div class="left-pupil">
            <div class="big-dot"></div>
            <div class="lil-dot"></div>
          </div>
        </div>
        <div class="eye right">
          <div class="right-pupil">
            <div class="big-dot"></div>
            <div class="lil-dot"></div>
          </div>
        </div>
        <div class="mouth"></div>
      </div>
      <div class="topfin"></div>
      <div class="fin"></div>
      <div class="finback"></div>
      <div class="tail"></div>
    </div>
    </div>
  );
};
