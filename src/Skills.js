import React from 'react'
import './Style/Skills.css'
import ProgressBar from "./ProgressBar";

const testData = [
  { bgcolor: "#6a1b9a", completed: 50 , title: "React"},
  { bgcolor: "#231cca", completed: 35 , title: "NextJS"},
  { bgcolor: "#00695c", completed: 45 , title: "CSS"},
  { bgcolor: "#ef6c00", completed: 45 , title: "HTML"},
  { bgcolor: "#447799", completed: 47 , title: "JS"},
  { bgcolor: "#128c24", completed: 45 , title: "Redux"},
  { bgcolor: "#123499", completed: 44 , title: "C#"},
  { bgcolor: "#993255", completed: 40 , title: "Unity"},
  { bgcolor: "#5bca50", completed: 38 , title: "C++"},
  
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