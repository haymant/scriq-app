import React from "react";
import Split from "react-split";
import './App.css'
import CodeEditor from "./CodeEditor";

function Coding() {



  return (
    <div>
      <Split
        className="fullV"
        sizes={[50, 50]}
        minSize={100}
        direction="vertical"
        cursor="row-resize"
      >
        <CodeEditor></CodeEditor>
        <Split
        sizes={[50, 50]}
        minSize={100}
        direction="horizontal"
        cursor="col-resize"
        style={{display: 'flex', height: 'calc(50vh - 50px)'}}
        >
          <div>Data</div>
          <div>Inspector</div>
        </Split>
      </Split>
    </div>
  );
}

export default Coding;