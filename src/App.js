import './App.css'
import Banner from "./Components/Banner/Banner";
import NavaBar from "./Components/NavaBar/NavaBar";
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavaBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
