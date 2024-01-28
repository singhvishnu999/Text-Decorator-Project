import './App.css';
import Navbar from './component/Navbar.js'
import Textform from './component/Textform.js'

function App() {
  return (
    <>
    <Navbar/>
    <div className='container' my = '4'>
    <Textform heading = "This is your text dcorater website"/>
    </div>
    </>
  );
}

export default App;
