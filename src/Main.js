import React, { Component } from 'react';
import Card from './components/Card/Card';
import Input from './components/Input/Input';

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            your_name : '',
            status : ''
        }
    }

    render() {
        return(
            <React.Fragment>
                <h2 style={{width: '550px', margin: 'auto', textAlign:'center', color:'#4d90fe'}}>
                    Sistem Informasi E-biz
                </h2>
                <Input getValues={(name, value)=> this.setState({[name] : value})} />

                <Card your_name={this.state.your_name} status={this.state.status} />
            </React.Fragment>
        );
    }
}