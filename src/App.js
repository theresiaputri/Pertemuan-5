import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './App.css';
import Home from './views/Home/Home.js';
import About from './views/About/About';
import Main from './Main'
import Header from './Header'
import Help from './views/Help/Help'

class App extends Component {
constructor(){
  super();
  //inisial state view
  this.state = {
    view : 'home'
  }
}

  render(){
    //Functional component view untuk mengatur component yang tampil
    const View = ()=>{
      if(this.state.view == 'home')
        return <Main />
      else if(this.state.view == 'about')
        return <About />
      else if(this.state.view == 'help')
        return <Help />
    }

    return (
      <div>
        <Header getValue={(value) => this.setState({view: value})}/>
        <View /> {/*panggil component View */}
      </div>
    );
  }
}

//Props
// function Message(props){
//   return <p>Hello {props.name},</p>;
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message name="Ulrich" />
//         <Home name="Eden Hazard" />
//       </div>
//     );
//   }
// }

//Class Component
// function Message(){
//   return "Pesan didalam Component";
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message />
//         <Home />
//       </div>
//     );
//   }
// }

//FUNCTIONAL COMPONENTS
// function Message(){
//   return <p>Hello from Message component</p>
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message />
//       </div>
//     );
//   }
// }

//FUNCTION
// function sayHello(){
//   return "Hello World"
// }

// class App extends Component{
  
//   bilangHalo(){
//     return "Halo Dunia"
//   }

//   render(){
//     return(
//       <>
//         <p>sayHello : <b>{sayHello()}</b></p>
//         <p>bilangHalo : <b>{this.bilangHalo()}</b></p>
//       </>
//     )
//   }
// }


export default App;
