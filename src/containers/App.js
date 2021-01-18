import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons.js';

class App extends Component {
  constructor(props){
    super(props)
    console.log('here is the first step in the constructor method')
  }
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false};

    componentWillMount(){
      console.log('it is mounting')
    }
    componentDidMount(){
      console.log('done with mounting')
    }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );
    // personIndex = index

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const insideperson = [...this.state.persons];
    insideperson[personIndex] = person;

    this.setState( { persons: insideperson } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const person1= [...this.state.persons];
    person1.splice( personIndex , 1 );
    this.setState( { persons: person1 } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }
  componentDidUpdate(preProps , preState){
    console.log('updated!')
  }

  render () {
    console.log('rendering.....')
    let screenshow = null;
    if ( this.state.showPersons ) {
      screenshow = (
        <div>
          <Persons
           persons = {this.state.persons} 
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}/>
        </div>
      );}
      const classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push( 'red' ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      classes.push( 'bold' , 'blue' ); // classes = ['red', 'bold']
    }
    
    

   
    return (
      
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join( ' ' )}>This is really working!</p>
          <button className='button' 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {console.log(this.state.persons[0].id)}
    
        
          {screenshow}
        </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;















































// import React, { Component } from 'react';



// import './App.css'
// import Input from './Input/Input'
// import Output from './OutPut/Output';
// class App extends Component{
//     state = {
//         userinput : ''
//     }
//     inputchangehandler =  ( event ) => {
//         this.setState({userinput : event.target.value})

//     }
//     Deletehandler =  ( index ) => {
//         const text = this.state.userinput.split('')
//         text.splice(index ,1)
//         const update = text.join('')
//         this.setState({userinput:update})

//     }

//     render(){
//         const ele = this.state.userinput.split('').map((ch , index) => {
//             return <Output chracter={ch}
//             key = {index} 
//             clicked = {() => this.Deletehandler(index)} />
//         })
//         return(
//             <div>
//                 <h1>Hello , it's {this.state.userinput}</h1>
//                 <input type = 'text' onChange = {this.inputchangehandler} value = {this.state.userinput} />
//                 <Input inputlength = {this.state.userinput.length}/>
//                 {ele}
//             </div>
//         )

//     }
   
// }
// export default App;














































// import React, { Component } from 'react';


// import './App.css';
// import './index.css';
// import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { id: 'asfa1', name: 'Max', age: 28 },
//       { id: 'vasdf1', name: 'Manu', age: 29 },
//       { id: 'asdf11', name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value',
//     showPersons: false
//   }

//   nameChangedHandler = ( event, id ) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;

      
//     });
//     // The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

//     const person = {
//       ...this.state.persons[personIndex]
//     };

//     // const person = Object.assign({}, this.state.persons[personIndex]);

//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState( {persons: persons} );
//   }

//   deletePersonHandler = (personIndex) => {
//     // const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({persons: persons});
//   }

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState( { showPersons: !doesShow } );
//   }


//   render () {
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     let persons = null;

//     if ( this.state.showPersons ) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return <Person
//               click={() => this.deletePersonHandler(index)}
//               name={person.name} 
//               age={person.age}
//               key={person.id}
//               changed={(event) => this.nameChangedHandler(event, person.id)} />
//           })}
//         </div>
//       );
//     }

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button
//           style={style}
//           onClick={this.togglePersonsHandler}>Toggle Persons</button>
//         {persons}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }

// export default App;





































// import React ,{ Component} from 'react';
// import Input from './Input/Input.js';
// import Output from './OutPut/Output.js';

// class App extends Component {
//     state = {
//         username : 'reema'

//     }
//     changename = (event) => {
//         this.setState({
//             username :event.target.value

//         })

//     }
//     render(){
//         return(
//                 <div className = 'App'>
//                 <Input changed = {this.changename}/>
//                 <Output   Name = {this.state.username} />
//                 <Output  Name = {this.state.username} />
//                 <Output Name = 'noor' />
//                 </div>
//             ) 
// } }
// export default App ;