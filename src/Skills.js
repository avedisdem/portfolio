import React from 'react'
import './Style/Skills.css'
import ProgressBar from "./ProgressBar";

const testData = [
  { bgcolor: "#6a1b9a", completed: 30 , title: "React"},
  { bgcolor: "#00695c", completed: 28 , title: "CSS"},
  { bgcolor: "#ef6c00", completed: 34 , title: "HTML"},
  { bgcolor: "#447799", completed: 27 , title: "JS"},
  { bgcolor: "#123499", completed: 30 , title: "C#"},
  { bgcolor: "#993255", completed: 30 , title: "Unity"},
  { bgcolor: "#5bca50", completed: 23 , title: "C++"},
  
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