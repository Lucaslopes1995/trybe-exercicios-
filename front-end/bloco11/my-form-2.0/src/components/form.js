import React from 'react';

import Inputs from './input';
import TextArea from './TextArea';
import DivOculta from './teste';
import OptionTag from './Options';

const EstadoInicial = {Nome:'',Email:'',Contador:0,submitted:false}
const EstadosBr = [
"Acre",
"Alagoas",
"Amapá",
"Amazonas",
"Bahia",
"Ceará",
"Espírito Santo",
"Goiás",
"Maranhão",
"Mato Grosso",
"Mato Grosso do Sul",
"Minas Gerais",
"Pará",
"Paraíba",
"Paraná",
"Pernambuco",
"Piauí",
"Rio de Janeiro",
"Rio Grande do Norte",
"Rio Grande do Sul",
"Rondônia",
"Roraima",
"Santa Catarina",
"São Paulo",
"Sergipe",
"Tocantins"
]

class Formulario extends React.Component {
     constructor (){
        super();
        this.state = EstadoInicial;
        this.inputHandleChange = this.inputHandleChange.bind(this)
        this.deleteValue = this.deleteValue.bind(this)
        this.mouseEnter = this.mouseEnter.bind(this)
        this.formSend = this.formSend.bind(this)
        this.resetaEstados = this.resetaEstados.bind(this)
     }

    inputHandleChange ({target}) {
        const name = target.name;
        const value = typeof target ==='radio' ? target.checked : target.value;
        this.setState({[name]:value})
    }

    deleteValue ({target: {value}}) {
        console.log(value[0])
        if(isNaN(parseInt(value[0]))===false){
            this.setState({Cidade:''})
        }
    }

    mouseEnter () {
        this.setState((estadoanterior,_props)=>({Contador:estadoanterior.Contador+1}))
        if(this.state.Contador === 0){
        alert("Preencha com cuidado esta informação")

        }
    }

    formSend (event) {
        event.preventDefault();
        this.setState({submitted:true})
    }

    resetaEstados () {
        this.setState(EstadoInicial)
    }


    render() {
        return (
            <form onSubmit={this.formSend}>
                <fieldset>
                    <Inputs
                    nome="Nome"
                    valor= {this.state.Nome}
                    uperCase = {{textTransform:"uppercase"}}
                    required = {true}
                    textMax = "40"
                    onchange= {this.inputHandleChange}
                    />
                    <Inputs
                    nome="Email"
                    valor={this.state.Email}
                    tipo="email"
                    required = {true}
                    textMax = "50"
                    onchange= {this.inputHandleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <Inputs
                    nome="CPF"
                    valor={this.state.CPF}
                    tipo="number"
                    required = {true}
                    textMax = "11"
                    onchange= {this.inputHandleChange}
                    />
                    <Inputs
                    nome="Endereço"
                    valor={this.state.Endereço}
                    required = {true}
                    textMax = "200"
                    onchange= {this.inputHandleChange}
                    pattern = "[a-zA-Z0-9 ]+"
                    />
                    <Inputs
                    nome="Cidade"
                    valor={this.state.Cidade}
                    required = {true}
                    textMax = "28"
                    onblur = {this.deleteValue}
                    onchange= {this.inputHandleChange}
                    />
                   
                    <Inputs
                    nome="Onde Mora"
                    valor="Casa"
                    tipo="radio"
                    required = {true}
                    onchange= {this.inputHandleChange}
                    valida={false}
                    />
                    
                    <Inputs
                    nome="Onde Mora"
                    valor="Apartamento"
                    tipo="radio"
                    required = {true}
                    onchange= {this.inputHandleChange}
                    valida={false}
                    />

                    <select name="Estado" id="teste" onChange= {this.inputHandleChange}>
                        {EstadosBr.map(estado=>
                        <OptionTag
                        estados={estado}
                        // nome="Estado"
                        valor={estado}
                        
                        />)} 
                    </select>
                    
                    

                </fieldset>
                <fieldset>
                <TextArea
                    nome="Último emprego"
                    valor={this.state['Último emprego']}
                    required = {true}
                    textMax = "1000"
                    onchange= {this.inputHandleChange}
                />
                <TextArea
                    nome="Cargo"
                    valor={this.state.Cargo}
                    required = {true}
                    textMax = "40"
                    onchange = {this.inputHandleChange}
                    onMouseEnter = {this.mouseEnter}
                />
                <TextArea
                    nome="Descrição do cargo"
                    valor={this.state["Descrição do cargo"]}
                    required = {true}
                    textMax = "500"
                    onchange = {this.inputHandleChange}
                />                
                </fieldset>
                <button type='submmit'>Enviar</button>
                <button type='reset' onClick={this.resetaEstados}>Resetar</button>
                <div>
                    {this.state.submitted && <DivOculta estado={this.state}/>}
                </div>
            </form>
        )
    }
}

export default Formulario;