import React from "react";

class Inputs extends React.Component{
    render(){
        const {nome , valor, tipo="text", uperCase={textTransform:"none"},required="false", textMax="false", onchange, pattern=false, onblur=false, valida=true} = this.props
        return(
            <>
            {valida&&nome}
            {!valida&&valor}
            <input 
            type={tipo}
            name={nome}
            value={valor}
            style={uperCase}
            required={required}
            maxLength={textMax}
            onChange={onchange}
            pattern={pattern}
            onBlur={onblur}
            />
            </>
        )
    }
}

export default Inputs