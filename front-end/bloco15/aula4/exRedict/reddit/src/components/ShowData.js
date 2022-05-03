import React from "react";
import { connect } from "react-redux";


class ShowData extends React.Component{
    constructor(){
        super();
        this.showDate = this.showDate.bind(this);
    }

    showDate(){
        const now = new Date();
        const hours = now.getHours();
        const hoursUntil12 = (hours<12)?hours:hours-12;
        const amPm = (hours<12)?"AM":"PM";
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        return (hoursUntil12+":"+minutes+":"+seconds+" "+amPm)
    }

    render(){
        const {info, erro,isloading} =this.props;
        //console.log(!isloading)
        return(
            <>
            <div><p>{`Last Updated at ${this.showDate()}.`}</p></div>
            {(isloading)?<p>Carregando</p> : info.map((el,i)=> 
            <div key={i}>
                <ul>
                    <li>{el.data.title}</li>

                </ul>
            </div>)}
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    info: state.info,
    erro: state.erro,
    isloading: state.isloading,
})

export default connect(mapStateToProps)(ShowData);