import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascriptLanguage } from '@codemirror/lang-javascript';

function Editor() {
    const code = '// Write your code here';
  return (
<CodeMirror
className='CodeMirror'
  value={code}
  options={{
    theme: 'default',
    keyMap: 'sublime',
    mode: javascriptLanguage,
    tabSize: 4,
    indentUnit: 4,
  }}
/>
  )
}

export default Editor