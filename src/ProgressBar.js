import './Style/ProgressBar.css'

const ProgressBar = ({key,bgcolor,completed,title}) => {
  
    return (
      <div className="progressBar">
        <span style={{color:bgcolor}}>{title}</span>
        <div className='progressBar__filler' style={{width: `${completed}%`, backgroundColor: bgcolor}}> 
          <span  className='progressBar__label'>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;