
import axios from 'axios';
import './App.css';
import FormComponent from './components/FormComponent';
import HeaderComponent from './components/HeaderComponent';
import SunsetCards from './components/SunsetCards';

function App() {



  return (
    <div className="App">
      <header className="App-header">
      <HeaderComponent/>
      <FormComponent/>
      <SunsetCards/>
      </header>
    </div>
  );
}



export default App;
