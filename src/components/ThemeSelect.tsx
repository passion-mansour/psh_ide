type Value = {
    codeTheme: any,
    setCodeTheme: any,
}

const ThemeSelect = ({codeTheme, setCodeTheme} : Value ) => {

    const themes = ['light', 'vs-dark'];

    const handlerChange = (e: any) => {
        setCodeTheme(e.target.value);
    }

    return (
        <select onChange={ handlerChange }>
            { themes.map( (theme) => {
                return (
                    <option value={theme} selected={codeTheme === theme}> {theme} </option>
                )
            }) }
        </select>
    )
}

export default ThemeSelect;