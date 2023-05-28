import React from 'react'
import './Style/projectsCont.css'
import Todo from './Pics/Todo.jpg';
import PcWeb from './Pics/PcWeb.PNG';
import Toon from './Pics/Toon.jpg';
import Projects from './Projects'

function ProjectsCont() {
  return (
    <div id="Projects" className='projectsCont'>
        <Projects 
            text = {"A Simple to do list where you can edit and delete"}
            img={Todo}
            className={"projects1"}
            link={"/TodoList"}
          />
          <Projects 
            text = {"a PcWeb design"}
            img={PcWeb}
            className={"projects2"}
            link={"/PcWeb"}
          /> 
          <Projects 
            text = {"Toon Survival is a game where your objectif is to survive as much as possible made with Unity and C#"}
            img={Toon}
            className={"projects1"}
            type={"blank"}
            link={"https://play.google.com/store/apps/details?id=com.DemirjianDev.ToonSurvival"}
          /> 
    </div>
  )
}

export default ProjectsCont
