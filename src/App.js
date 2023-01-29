import './App.css';
import Login from './Pages/login';
import ims2 from './images/loginImage.png'



function App() {
  return (
<div className='App' style={{display:'flex',}}>

<div  >  <img className='imageDiv' src={ims2} alt="" /> </div>
<div style={{textAlign:'right'}} >
  
  <Login />
</div>

</div>
  );
}

export default App;
