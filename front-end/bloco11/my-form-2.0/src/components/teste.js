import React from "react";

class DivOculta extends React.Component{
    render(){
        
        const estado = this.props.estado
        const estadoChaves =Object.keys(estado)
        const estadoValores =Object.values(estado)
        return(
            <>
           {estadoChaves.map((estado,index)=><p>{estadoChaves[index]+": "+estadoValores[index]}</p>)}
            
            </>
        )
    }
}

export default DivOculta