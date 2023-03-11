import './App.css';
import Header from './header'
import Code from './code'
import Dataprovider from './context/DataProvider';
import Result from './result';

function App() {
  return (
    <Dataprovider>

    <div className="App">
     <Header/>
     <Code/>
     <Result/>
    </div>
    </Dataprovider>
  );
}

export default App;
