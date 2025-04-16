import React from 'react'
import './Style/Skills.css'
import ProgressBar from "./ProgressBar";

const testData = [
  { bgcolor: "#6a1b9a", completed: 13 , title: "React"},
  { bgcolor: "#231cca", completed: 8 , title: "NextJS"},
  { bgcolor: "#00695c", completed: 30 , title: "CSS"},
  { bgcolor: "#ef6c00", completed: 45 , title: "HTML"},
  { bgcolor: "#447799", completed: 20 , title: "JS"},
  { bgcolor: "#128c24", completed: 15 , title: "Redux"},
  { bgcolor: "#123499", completed: 20 , title: "C#"},
  { bgcolor: "#993255", completed: 25 , title: "Unity"},
  { bgcolor: "#5bca50", completed: 15 , title: "C++"},
  
];

function Skills() {

  return (
    <div id='Skills' className='skills'>
        <h1>Skills</h1>
        <div className="skills__bottom">
            {
             testData.map((item, idx) => (
                <ProgressBar 
                    key={idx} 
                    bgcolor={item.bgcolor} 
                    completed={item.completed}
                    title ={item.title}
                    />
            ))}
        </div>
    </div>
  )
}

export default Skills
