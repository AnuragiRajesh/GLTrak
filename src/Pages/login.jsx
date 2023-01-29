import React,{useState} from 'react';
import ima3 from '../images/SESHASAI.png'
import '../App.css';

 function Login() {
    const [inputField , setInputField] = useState({
        first_name: '',
        last_name: '',
        gmail: ''
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    const submitButton = () =>{
        alert(inputField.first_name)
    }
    return <div style={{display:'flex', flexDirection:'column', position: 'absolute',
    width: '50%',
    padding: '10px' }}>
       
        <div style={{display:'flex', flexDirection:'column', position: 'absolute',
    width: '50%',
    padding: '10px',alignSelf: 'center'}}>

<div style={{display:'flex', flexDirection:'column', justifyContent:'left', gap:'10px', margin:'10px'}}>


<div style={{textalign: 'center',
font: 'normal normal bold 25px/16px Montserrat',
letterspacing: '0.63px',
color: '#43425D',
opacity: '1'}}>TAG's MANAGEMENT SYSTEM</div>
<div><img style={{width:'50%', alignSelf:'right'}} src={ima3}/></div>
</div>


    <input style={{ border: '0',outline: '0',background: 'transparent',borderBottom: '1px solid black'}}
    type="text" 
    name="first_name" 
    onChange={inputsHandler} 
    placeholder="First Name" 
    value={inputField.first_name}/>

    <br/>

    <input style={{ border: '0',outline: '0',background: 'transparent',borderBottom: '1px solid black'}}
    type="text" 
    name="last_name" 
    onChange={inputsHandler} 
    placeholder="Last Name" 
    value={inputField.last_name}/>

    <br/>

    <input style={{ border: '0',outline: '0',background: 'transparent',borderBottom: '1px solid black'}}
    type="gmail" 
    name="gmail" 
    onChange={inputsHandler} 
    placeholder="Gmail" 
    value={inputField.gmail}/>

    <br/>
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <div  style={{display:'flex', textAlign:'center'}}> <input type="checkbox"/> <p>Remember me</p></div> 
        <div><p><a style={{textDecoration:'none'}} href="">Forgot Password</a></p></div>
    </div>
<div style={{display:'flex', justifyContent:'space-evenly'}}>

    <button style={{width:'25%' , padding:'5px', background:'#43425D 0% 0% no-repeat padding-box',border:' 1px solid #43425D',borderRadius:'8px'}} onClick={submitButton}><span style={{textAlign: 'center',
font:' normal normal normal 15px/19px Montserrat',
letterSpacing:' 0px',
color: '#FFFFFF',
opacity: '1'}}>Login</span></button>
    <button  style={{width:'25%' , padding:'5px', background:'#43425D 0% 0% no-repeat padding-box',border:' 1px solid #43425D',borderRadius:'8px'}}  onClick={submitButton}><span style={{textAlign: 'center',
font:' normal normal normal 15px/19px Montserrat',
letterSpacing:' 0px',
color: '#FFFFFF',
opacity: '1'}}>Sign up</span></button>
</div>
</div>
</div>
    
  }
  export default Login