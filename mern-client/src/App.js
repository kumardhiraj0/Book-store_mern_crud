import './App.css';
import AllBook from './components/AllBook';
import CreateBook from './components/CreateBook';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<CreateBook/>}/>
      <Route exact path="/books" element={<AllBook/>}/>
      <Route exact path="/updatebook/:bid" element={<UpdateBook/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
