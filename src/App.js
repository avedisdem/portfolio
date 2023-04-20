import About from './About'
import Contacts from './Contacts'
import Header from './Header'
import ProjectsCont from './ProjectsCont'
import {Route,Routes} from 'react-router-dom'
import Color from './ColorGenerator/Color'
import Skills from './Skills'
import './Style/App.css'
import Todo from './TodoList/Todo'

function App() {

  return (
    <Routes>
        <Route exact path="/" element={
          <div className="app">
            <Header /> 
            <About/>
            <Skills />
            <ProjectsCont />
            <Contacts />
          </div>}/>
            <Route exact path="/TodoList" element={<Todo/>}/>  
            <Route exact path="/ColorGenerator" element={<Color/>}/>  
    </Routes>
  )
}

export default App