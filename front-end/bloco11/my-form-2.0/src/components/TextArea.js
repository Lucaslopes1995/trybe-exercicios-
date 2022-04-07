import React from "react";

class TextArea extends React.Component{
    render(){
        const {nome , valor, tipo="text", uperCase={textTransform:"none"},required="false", textMax="false", onchange, pattern=false, onblur=false, onMouseEnter} = this.props
        return(
            <>
            {nome}
            <textarea 
            type={tipo}
            name={nome}
            value={valor}
            style={uperCase}
            required={required}
            maxLength={textMax}
            onChange={onchange}
            pattern={pattern}
            onBlur={onblur}
            onMouseEnter={onMouseEnter}
            />
            </>
        )
    }
}

export default TextArea