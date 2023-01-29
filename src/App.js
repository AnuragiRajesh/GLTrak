import './App.css';
import Login from './Pages/login';
import ims2 from './images/loginImage.png'


//dfighdfghjosdfgh

function App() {
  return (
<div className='App' style={{display:'flex',}}>

<div  >  <img className='imageDiv' src={ims2} alt="" /> </div>
<div style={{textAlign:'right'}} >
  
  <Login />
</div>
{/* </header> */}

</div>
  );
}

export default App;
