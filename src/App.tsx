import {Route, Routes} from "react-router-dom";
import Discover from "./pages/Discover";
import Home from "./pages/Home"
import Join from "./pages/Join"
import Layout from "./components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/join" element={<Join />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;