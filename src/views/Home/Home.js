import React from 'react';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {name : this.props.name}
    }

render(){
    return(
        <div>
            <h2>Title Home Component</h2>
            <p>Hello my name is {this.props.name}</p>
            <button onClick={()=> this.setState({name : 'Tyrion Lannister'})}> Change my name </button>
        </div>
    )
    }


// constructor(props){
//     super (props);
//     this.state = {name : this.props.name}
// }

// render(){
//     return(
//         <div>
//             <h2>Ini adalah halaman home</h2>
            
//         </div>
//     )
// }


// render(){
//     return(
//         <div>
//         <h2>Title Home Component</h2>
//         <p>Hello my name is {this.props.name}</p>
//         </div>
//     )
// }
}