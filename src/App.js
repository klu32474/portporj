//import logo from './logo.svg';
import { Aboutme } from "./Aboutme";
import "./index.css"
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Knowmore } from "./Knowmore";
///<img src={harsha}/>
import { NavBar } from "./NavBar"
import harsha from "./photos/anime.png"
import { Tools } from "./Tools";
import { Contact } from "./Contact";
import { Cv } from "./Cv";
function App() {
  return (
   <div>
    <NavBar/>
    <body className="bg-[#03346E]">
      
    <Home/>
    <body className="bg-[#021526] ">
    <Aboutme/>
    </body>
    <body className="bg-[#03346E]">
      <Projects/>
     

    </body>
    <body className="bg-[#021526] ">
    <Knowmore/>
    </body>
    
<body className="bg-[#03346E]">
<Tools/>
</body>
<body className="bg-[#021526] ">
   <Contact/>
    </body>
    <body className="bg-[#03346E]">
<Cv/>
</body>
    </body>
    </div>
  );
}

export default App;
