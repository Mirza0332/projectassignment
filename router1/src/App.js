import './App.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from './Error';
import Basicform from "./component/forms/basicform";
import Signup from './signup';






function App() {
  return <BrowserRouter>
<Routes>
<Route path="/" element={<Home />} >
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<Error />} />
<Route path="/basicform" element={<Basicform />} />
<Route path="/signup" element={<signup />} />
</Route>
</Routes>
  </BrowserRouter>;
}

export default App;
