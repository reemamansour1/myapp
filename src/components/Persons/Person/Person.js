import React from 'react';
import './Person.css';

const Person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <ul>
                <li>Apples</li>
                <li>Bananas</li>
                <li>Cherries</li>
             </ul>
        </div>
    )
};

export default Person;




































// import React  from 'react';
// import Person from './Person/Person'
// const app = () => {
//     const [personsState , SetpersonsState] =  React.useState({
//     persons : [
//         {name:'reema' , age:'12'},
//         {name: 'aziz' , age:'73'},
//         {name:'haila' , age:'75'}
//     ] ,
//         otherState : 'hi reema'
//  } )
//     const switchnamehandler = () => {
//     SetpersonsState({
//     persons : [
//         {name:'rmrm' , age:'45'},
//         {name:'ewf' , age:'65'},
//         {name:'dfd' , age:'23'}] ,
//         otherState:'hello bebe'
       
// })}



//     {
//         return(
//             <div>
//                 <h1>Hello, I'm a react developer</h1>
//                 <button onClick = {switchnamehandler}>change</button>
//                 <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
//                 <h1 onClick ={switchnamehandler}>{personsState.otherState}</h1>
                
//                 <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age} />
//                 <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age} />
                

            
//             </div>
//         )
//     }
// }
// export default app;