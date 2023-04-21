import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style/Color.css'

function Color() {
   var randomColors = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
  const[randomColor,setRandomColor] = useState([]);

  const handleColorGenerator = () => { 
    
    for(let i = 0 ; i < 37;i++)
    {
      console.log("first");
      let rand="#";
        for(let j = 0 ; j < 6;j++)
        {
          switch(Math.floor(Math.random() * 17))
          {
            case 0:
              rand+="0";
            break;
            case 1:
              rand+="1";
            break;
            case 2:
              rand+="2";
            break;
            case 3:
              rand+="3";
            break;
            case 4:
              rand+="4";
            break;
            case 5:
              rand+="5";
            break;
            case 6:
              rand+="6";
            break;
            case 7:
              rand+="7";
            break;
            case 8:
              rand+="8";
            break;
            case 9:
              rand+="9";
            break;
            case 10:
              rand+="A";
            break;
            case 11:
              rand+="B";
            break;
            case 12:
              rand+="C";
            break;
            case 13:
              rand+="D";
            break;
            case 14:
              rand+="E";
            break;
            case 15:
              rand+="F";
            break;
          
          }
        }
        randomColors[i] = rand;
    }
   console.log(randomColors);
   setRandomColor(randomColors);
   console.log(randomColor)
   }

  
  return (
    <div className="color">
      <div style = {{backgroundColor:randomColor[36] ?  randomColor[36]:"#999353" }} className="container">
        <span style = {{color:randomColor[10] ?  randomColor[10]:"#765427" }}>G</span>
        <span style = {{color:randomColor[12] ?  randomColor[12]:"#E7EBDA" }}>E</span>
        <span style = {{color:randomColor[11] ?  randomColor[11]:"#A12312" }}>N</span>
        <span style = {{color:randomColor[13] ?  randomColor[13]:"#45322E" }}>E</span>
        <span style = {{color:randomColor[14] ?  randomColor[14]:"#B32821" }}>R</span>
        <span style = {{color:randomColor[15] ?  randomColor[15]:"#256D7B" }}>A</span>
        <span style = {{color:randomColor[16] ?  randomColor[16]:"#C1876B" }}>T</span>
        <span style = {{color:randomColor[17] ?  randomColor[17]:"#781F19" }}>E</span>
        <span > </span>
        <span style = {{color:randomColor[18] ?  randomColor[18]:"#282828" }}>R</span>
        <span style = {{color:randomColor[19] ?  randomColor[19]:"#633A34" }}>A</span>
        <span style = {{color:randomColor[20] ?  randomColor[20]:"#3F888F" }}>N</span>
        <span style = {{color:randomColor[21] ?  randomColor[21]:"#8E402A" }}>D</span>
        <span style = {{color:randomColor[22] ?  randomColor[22]:"#1E5945" }}>O</span>
        <span style = {{color:randomColor[23] ?  randomColor[23]:"#3E5F8A" }}>M</span>
        <span > </span>
        <span style = {{color:randomColor[24] ?  randomColor[24]:"#EAE6CA" }}>C</span>
        <span style = {{color:randomColor[25] ?  randomColor[25]:"#606E8C" }}>O</span>
        <span style = {{color:randomColor[26] ?  randomColor[26]:"#CB2821" }}>L</span>
        <span style = {{color:randomColor[27] ?  randomColor[27]:"#4C9141" }}>O</span>
        <span style = {{color:randomColor[28] ?  randomColor[28]:"#9C9C9C" }}>R</span>
        <span> </span>
        <span style = {{color:randomColor[29] ?  randomColor[29]:"#6A5F31" }}>P</span>
        <span style = {{color:randomColor[30] ?  randomColor[30]:"#587246" }}>A</span>
        <span style = {{color:randomColor[31] ?  randomColor[31]:"#EDFF21" }}>L</span>
        <span style = {{color:randomColor[32] ?  randomColor[32]:"#4A192C" }}>E</span>
        <span style = {{color:randomColor[33] ?  randomColor[33]:"#1F3A3D" }}>T</span>
        <span style = {{color:randomColor[34] ?  randomColor[34]:"#E7EBDA" }}>T</span>
        <span style = {{color:randomColor[35] ?  randomColor[35]:"#9B111E" }}>E</span>
      </div>
      <div className='color__container'>
        <div className="color__item">
          <div style = {{backgroundColor:randomColor[0] ?  randomColor[0]:"#765427" }} className="app__color" />
          <p style={{color:randomColor[0] ?  randomColor[0]:{}}}>{randomColor[0] ? randomColor[0]:"#765427"}</p>
        </div>
        <div className="color__item">
          <div style = {{backgroundColor:randomColor[1] ?  randomColor[1]:"#135" }} className="app__color" />
          <p style={{color:randomColor[1] ?  randomColor[1]:{}}} > {randomColor[1] ? randomColor[1]:"#135"}</p>
        </div>
        <div className="color__item">
          <div style = {{backgroundColor:randomColor[2] ?  randomColor[2]:"#4343" }} className="app__color" />
          <p style={{color:randomColor[2] ?  randomColor[2]:{}}}> {randomColor[2] ? randomColor[2]:"#4343"}</p>
        </div>
        <div className="color__item">
          <div style = {{backgroundColor:randomColor[3] ?  randomColor[3]:"#65527" }} className="app__color" />
          <p style={{color:randomColor[3] ?  randomColor[3]:{}}}> {randomColor[3] ? randomColor[3]:"#65527"}</p>
        </div>
        <div className="color__item">
          <div style = {{backgroundColor:randomColor[4] ?  randomColor[4]:"#241172" }} className="app__color" />
          <p style={{color:randomColor[4] ?  randomColor[4]:{}}}> {randomColor[4] ? randomColor[4]:"#241172"}</p>
        </div>
        <div className="color__item">
          <div style = {{backgroundColor:randomColor[5] ?  randomColor[5]:"#643436" }} className="app__color" />
          <p style={{color:randomColor[5] ?  randomColor[5]:{}}}> {randomColor[5] ? randomColor[5]:"#643436"}</p>
        </div>
        <div className="color__item">
          <div style = {{backgroundColor:randomColor[6] ?  randomColor[6]:"#900900" }} className="app__color" />
          <p style={{color:randomColor[6] ?  randomColor[6]:{}}}> {randomColor[6] ? randomColor[6]:"#900900"}</p>
        </div>
        <div className="color__item">
          <div style = {{backgroundColor:randomColor[7] ?  randomColor[7]:"#996060" }} className="app__color" />
          <p style={{color:randomColor[7] ?  randomColor[7]:{}}}> {randomColor[7] ? randomColor[7]:"#996060"}</p>
        </div>
        <div className="color__item">
          <div style = {{backgroundColor:randomColor[8] ?  randomColor[8]:"#609090" }} className="app__color" />
          <p style={{color:randomColor[8] ?  randomColor[8]:{}}}> {randomColor[8] ? randomColor[8]:"#609090"}</p>
        </div>
        <div className="color__item">
          <div style = {{backgroundColor:randomColor[9] ?  randomColor[9]:"#327733" }} className="app__color" />
          <p style={{color:randomColor[9] ?  randomColor[9]:{}}}> {randomColor[9] ? randomColor[9]:"#327733"}</p>
        </div> 
      </div>
      <h3 onClick={handleColorGenerator} >Generate</h3>
      <Link to="/">
        <h1 >HOME</h1>
      </Link>
      <div className="empty"></div>
    </div>
  )
}

export default Color
