import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skill from "./components/skills/skill";
import Contact from './components/contacts/contact';
import Footer from "./components/footer/footer";
import Experience from "./components/experience/experience";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Experience/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
