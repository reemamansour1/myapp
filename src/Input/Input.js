import React from 'react'
const validation = (props) => {
    let text = 'its short '
    if(props.inputlength > 5){
        text = 'its long'

    }

    return(
        <div>
            {text}



        </div>
    )

}

export default validation;























// import React from 'react';
// const Input = (props) => {
//     const styles = {
//             backgroundColor:'white',
//             cursor:'pointer',
//             font:'inherint',
//             border:'1px solid blue',
//             padding:'8px',
//             cursor:'not-allowed'
//     }
//     return(
//         <div>
//             <input style={styles} type = 'text' onChange ={props.changed}/>
//         </div>
//     )
// }
// export default Input;
