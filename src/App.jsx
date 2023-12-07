import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import All from './All';
import Fsd from './Fsd';
import Ds from './Ds';
import Cyber from './Cyber';
import Career from './Career';
import { Link } from 'react-router-dom';


function App() {

  

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <img width={"1500"} height={"200"} src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png" alt="..." />
          <BrowserRouter>
            <nav className="navbar-nav" role="navigation">
              <div className="container-fluid">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/"}>All</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/fsd"}>Full Stack Development</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/datascience"}>Data Science</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/cybersecurity"}>Cyber Security</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to={"/career"}>Career</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<All />}></Route>
              <Route path="/fsd" element={<Fsd />}></Route>
              <Route path="/datascience" element={<Ds />}></Route>
              <Route path="/cybersecurity" element={<Cyber />}></Route>
              <Route path="/career" element={<Career />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
