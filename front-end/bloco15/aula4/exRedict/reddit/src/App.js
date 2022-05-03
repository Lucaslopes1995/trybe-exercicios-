import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import InicialInfos from './components/InicialInfos';
import ShowData from './components/ShowData'

class App extends React.Component{
  render(){

  
  return (

    <Provider store={store}>

    <InicialInfos></InicialInfos>
    <ShowData></ShowData>
    </Provider>
  );
  }
}

export default App;
