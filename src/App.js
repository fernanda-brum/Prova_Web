import { Route,Routes } from "react-router-dom";

import Home from "./pages/Home";
import MeuPlano from "./pages/MeuPlano";
import Historico from "./pages/Historico";
import './App.css';
import Header from "./components/Header";

function App() {
  return (  
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meuplano" element={<MeuPlano />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </div>
  );
}

export default App;
