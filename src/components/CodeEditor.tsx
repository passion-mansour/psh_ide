import MonacoEditor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import LanguageSelect from "./LanguageSelect";
import ThemeSelect from "./ThemeSelect";


const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState('');
    const [codeLanguage, setCodeLanguage] = useState('javascript');
    const [codeTheme, setCodeTheme] = useState('vs-dark');

    const onMount = (editor: any) => {
        editorRef.current = editor;
    }

    return (
        <>
            <ThemeSelect codeTheme={codeTheme} setCodeTheme={setCodeTheme} />
            <LanguageSelect codeLanguage={codeLanguage} setCodeLanguage={setCodeLanguage} />
            <MonacoEditor 
                theme={codeTheme}
                language={codeLanguage}
                height={500}
                options={{ wordWrap: 'on' }}
                value={value}
                onMount={
                    onMount
                }
                onChange={ (value: any) => setValue(value) }
            />
        </>
    )
}

export default CodeEditor;