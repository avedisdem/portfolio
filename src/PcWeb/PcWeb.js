import FadeInSection from './FadeInSection';
import Header from './HeaderP';
import Feed from './Feed';
import logo from './Images/Keyboard.jpg'
import logo1 from './Images/GamingDesk.png'
import logo2 from './Images/PcSetup.webp'
import logo3 from './Images/Monitors.jpg'
import logo4 from './Images/PcGaming.jpg'
import logo5 from './Images/CustomBuild.jpg'
import './Styles/PcWeb.css';
import Widgets from './Widgets';
import FooterP from './FooterP';



function PcWeb() {
  return (
    <div className="pcweb">
      <Header />
      <Feed />
      <div className='pcweb__margin'/>
      <FadeInSection side= {"right"} >
          <div className="pcweb__FadeInCont right" >
            <img src = {logo1}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit commodo ultrices. Mauris eu massa sit amet nisi hendrerit consectetur vel eu ipsum. Duis tristique neque id tortor fringilla, id tempus justo malesuada. Aenean consequat nisi in pellentesque bibendum. Donec quis mauris eget ex aliquet mattis. Vestibulum ultrices pretium aliquam. Lorem ipsum dolor sit amet, </p>
          </div>
      </FadeInSection>
      <FadeInSection  >
          <div className="pcweb__FadeInCont " >
            <img src = {logo2}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit commodo ultrices. Mauris eu massa sit amet nisi hendrerit consectetur vel eu ipsum. Duis tristique neque id tortor fringilla, id tempus justo malesuada. Aenean consequat nisi in pellentesque bibendum. Donec quis mauris eget ex aliquet mattis. Vestibulum ultrices pretium aliquam. Lorem ipsum dolor sit amet, </p>
          </div>
      </FadeInSection>
      <div className='container'>
        <Widgets 
          img={logo3}
          desc= "Newest Technologies"
        />
        <Widgets 
          img={logo4}
          desc= "Best Hardwares"
        />
        <Widgets 
          img={logo5}
          desc= "Best Prebuilt PC "
        />
        <Widgets 
          img={logo}
          desc= "Top optimization"
        />
      </div>
      <FooterP />
    </div>
  );
}

export default PcWeb;
