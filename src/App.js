import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./AddContact";
import Home from "./Home";
import Details from './Details'
import Edit from './Edit'

function App() {
  return (
    <BrowserRouter>
      {/*<Home/>*/}
      <Routes>
        <Route path="/" element={<Home/> } ></Route>
        <Route path="/AddContact" element={<AddContact/>}></Route>
        <Route path="/Details/:id" element={<Details/>} ></Route>
        <Route path="/Edit/:id" element={<Edit/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
