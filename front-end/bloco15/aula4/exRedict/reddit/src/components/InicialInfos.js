import React from 'react';
import { connect } from 'react-redux';
import {getInfosAPI} from '../actions'

class InicialInfos extends React.Component{
    constructor(){
        super();
        this.handleState = this.handleState.bind(this);
        this.handleStateButton = this.handleStateButton.bind(this);
    }
    componentDidMount(){
        const {getInfos} = this.props;
        getInfos('reactjs')
    }

    handleState ({target}) {
        const {getInfos} = this.props;
        getInfos(target.value)
        //console.log(target.value)

    }

    handleStateButton ({target}) {
        const {getInfos,info} = this.props;
        getInfos(info[0].data.subreddit)
        const now = new Date;
        console.log(now.getHours(),now.getMinutes())

    }

    render(){
        let {info} = this.props;
        info=((info[0] ===undefined) ? 'erro':info=info[0].data.subreddit)
        //console.log('opa',info)
        return(
        <>
        <div><p><strong>Selected:</strong> {info}</p></div>
        <select name='modelo' onChange={(e)=>this.handleState(e)}>
            <option>reactjs</option>
            <option>frontend</option>
        </select>
        <button onClick={(e)=>this.handleStateButton(e)}>Refresh</button>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    info: state.info
})

const mapDispatchToProps = (dispatch) => ({
    getInfos: (value) => dispatch(getInfosAPI(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(InicialInfos)