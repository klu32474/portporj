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
    <body className="bg-[#352F44]">
      
    <Home/>
    <body className="bg-[#352F44] ">
    <Aboutme/>
    </body>
    <body className="bg-[#5C5470]">
      <Projects/>
     

    </body>
    <body className="bg-[#5C5470] ">
    <Knowmore/>
    </body>
    
<body className="bg-[#B9B4C7]">
<Tools/>
</body>
<body className="bg-[#B9B4C7] ">
   <Contact/>
    </body>
    <body className="bg-[#FAF0E6]">
<Cv/>
</body>
    </body>
    </div>
  );
}

export default App;
