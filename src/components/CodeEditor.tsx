import MonacoEditor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import LanguageSelect from "./LanguageSelect";


const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState('');
    const [codeLanguage, setCodeLanguage] = useState('javascript')

    const onMount = (editor: any) => {
        editorRef.current = editor;
    }

    useEffect(() => {
        
    }, [codeLanguage]);

    return (
        <>
            <LanguageSelect codeLanguage={codeLanguage} setCodeLanguage={setCodeLanguage} />
            <MonacoEditor 
                theme="vs-dark"
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