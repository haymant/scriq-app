import React from 'react';
import Editor from 'react-simple-code-editor';
import Prism, { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism.css'; 

function Coding() {

  const [code, setCode] = React.useState(
    `#Hello!`
  );

  return (
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, Prism.languages.python, 'py')}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
}

export default Coding;