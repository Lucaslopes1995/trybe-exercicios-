import React from "react";

class OptionTag extends React.Component{
    render(){
        
        const {estados, onChange, nome} = this.props
        
        return(
            <>
           {<option
           name={nome} 
           value={estados}
           >{estados}</option>}
            </>
        )
    }
}

export default OptionTag