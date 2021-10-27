import './App.css';
import { useState } from 'react';

const App= () => {

  
  const [values,setValues]= useState({
    name:'',
    lastname:'',
    email:''
  })

  const [success, setSuccess]= useState(false);
  const [valid,setValid]= useState(false);
  
  const handleSubmit= (event) => {
    event.preventDefault();
    if(!values.name || !values.email || !values.lastname){
      setSuccess(true);
      setValid(false);
    }
    if ( values.name && values.lastname && values.email ){
    setSuccess(true);
    setValid(true);
  }
  }

  const handleNameChange = (event) => {
    setValues({...values,name: event.target.value})
  }

  const handleLastnameChange = (event) => {
    setValues({...values,lastname: event.target.value})
  }

  const handleEmailChange = (event) => {
    setValues({...values,email: event.target.value})
  }


  return (
    <>
    <div className="container-box">

      { !valid ? <h1>About you :) </h1> : null }
      
      {success && valid ? <div className="successclass"><h3> Your form has been successfully submitted! </h3></div> : null }
    
      {success && valid ? null :
    <form onSubmit={handleSubmit}>
     <div className="input-container">
      
       <input type="text" className="text-field" placeholder="Name" onChange={handleNameChange}/>
     </div>
     {success && !values.name ? <span className="error">Please enter your name </span> : null }
     

     <div className="input-container">
       <input type="text" className="text-field" placeholder="Lastname" onChange={handleLastnameChange}/>
     </div>
     {success && !values.lastname ? <span className="error">Please enter your Lastname </span> : null }

     <div className="input-container">
       <input type="email" className="text-field" placeholder="Email"onChange={handleEmailChange}/>
     </div>
     {success && !values.email ? <span className="error">Please enter your email </span> : null }

     <div className="input-container">
       <button type='submit' className='submit-btn' placeholder="Submit">Submit</button>
     </div>
      </form>
}
    </div>
    
    </>
  );
}

export default App;
