import React, { useState } from 'react';
import ima3 from '../images/SESHASAI.png'
import '../App.scss';
import "@fontsource/montserrat";
function Login() {
    const [userNameInputField, setuserNameInputField] = useState('')
    const [passwordInputField, setPasswordInputField] = useState('')

    const userNameInputsHandler = (e) => {
        setuserNameInputField(e.target.value)
    }
    const passwordInputsHandler = (e) => {
        setPasswordInputField(e.target.value)
    }
    
    const submitButton = () => {
        // console.log("UserName:", userNameInputField, "Password:",passwordInputField)
      alert(`Username:${userNameInputField} ,  Password: ${passwordInputField} ` )
    }
    return <div className="login-div" >
        <div className="login-image-div" ></div>
        <div className="form-div" >
            <div style={{ textAlign: "center", margin: '3rem' }}>
                <div className='top-Heading' >TAG MANAGEMENT SYSTEM</div>
                <div><img style={{ width: '30%', }} src={ima3} /></div>
                <div className='sub-Heading'>Welcome Back, Please login to your account.</div>
            </div>




            <div className='custome-form'>
                <input className='form-input'
                    type="text" name="Username"
                    onChange={userNameInputsHandler}
                    placeholder="Username"
                    value={userNameInputField}
                />

                <br />
                
                <input className='form-input'
                    type="password" name="Password"
                    onChange={passwordInputsHandler}
                    placeholder="Password"
                    value={passwordInputField}/>
 <div>
                <div className='RememberME-ForgotPassword'>
                    <div > <input className="remember_me" type="checkbox" /> 
                    <span className="remember_me_text">Remember me</span></div>
                    <div><span><a className ="forgot_pass" style={{ textDecoration: 'none', display: 'block' }} href="">Forgot Password</a></span></div>
                </div>

                <div className='Login-SignUp-button-div'>
                    <button className='login-signUp-buttons' onClick={submitButton}><span >Login</span></button>
                    <button className='login-signUp-buttons' onClick={submitButton}><span >Sign up</span></button>
                </div>
                </div>


            </div>

        </div>
    </div>



    // <div style={{display:'flex', flexDirection:'column', position: 'absolute',
    //     width: '50%',
    //     padding: '10px' }}>

    //         <div style={{display:'flex', flexDirection:'column', position: 'absolute',
    //     width: '50%',
    //     padding: '10px',alignSelf: 'center'}}>

    // <div style={{display:'flex', flexDirection:'column', justifyContent:'left', gap:'10px', margin:'10px'}}>


    // <div style={{textalign: 'center',
    // font: 'normal normal bold 25px/16px Montserrat',
    // letterspacing: '0.63px',
    // color: '#43425D',
    // opacity: '1'}}>TAG's MANAGEMENT SYSTEM</div>
    // <div><img style={{width:'50%', alignSelf:'right'}} src={ima3}/></div>
    // </div>


    //     <input style={{ border: '0',outline: '0',background: 'transparent',borderBottom: '1px solid black'}}
    //     type="text" 
    //     name="Username" 
    //     onChange={inputsHandler} 
    //     placeholder="First Name" 
    //     value={inputField.Username}/>

    //     <br/>

    //     <input style={{ border: '0',outline: '0',background: 'transparent',borderBottom: '1px solid black'}}
    //     type="text" 
    //     name="last_name" 
    //     onChange={inputsHandler} 
    //     placeholder="Last Name" 
    //     value={inputField.last_name}/>

    //     <br/>

    //     <input style={{ border: '0',outline: '0',background: 'transparent',borderBottom: '1px solid black'}}
    //     type="gmail" 
    //     name="gmail" 
    //     onChange={inputsHandler} 
    //     placeholder="Gmail" 
    //     value={inputField.gmail}/>

    //     <br/>
    //     <div style={{display:'flex', justifyContent:'space-evenly'}}>
    //         <div  style={{display:'flex', textAlign:'center'}}> <input type="checkbox"/> <p>Remember me</p></div> 
    //         <div><p><a style={{textDecoration:'none'}} href="">Forgot Password</a></p></div>
    //     </div>
    // <div style={{display:'flex', justifyContent:'space-evenly'}}>

    //     <button style={{width:'25%' , padding:'5px', background:'#43425D 0% 0% no-repeat padding-box',border:' 1px solid #43425D',borderRadius:'8px'}} onClick={submitButton}><span style={{textAlign: 'center',
    // font:' normal normal normal 15px/19px Montserrat',
    // letterSpacing:' 0px',
    // color: '#FFFFFF',
    // opacity: '1'}}>Login</span></button>
    //     <button  style={{width:'25%' , padding:'5px', background:'#43425D 0% 0% no-repeat padding-box',border:' 1px solid #43425D',borderRadius:'8px'}}  onClick={submitButton}><span style={{textAlign: 'center',
    // font:' normal normal normal 15px/19px Montserrat',
    // letterSpacing:' 0px',
    // color: '#FFFFFF',
    // opacity: '1'}}>Sign up</span></button>
    // </div>
    // </div>
    // </div>

}
export default Login