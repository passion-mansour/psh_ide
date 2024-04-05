const LanguageSelect = ({ codeLanguage, setCodeLanguage } : { codeLanguage: any, setCodeLanguage: any }) => {
    const languages = ['javascript', 'c', 'java', 'python'];


    const handlerChange = (e: any) => {
        setCodeLanguage(e.target.value);
    }

    return (
        <select onChange={ handlerChange }>
            { languages.map( (language) => {
                return (
                    <option value={language} selected={ language === 'javascript' }> { language } </option>
                )
            }) }
        </select>
    )
};

export default LanguageSelect;