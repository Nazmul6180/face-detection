import React from 'react';
import Tilt from 'react-tilt'
import './logo.css';
import brain from './logoNBG.png';

const Logo = () => {
    return(
       <div className='ma4 mt0  '>
         <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 110, width: 110 }} >
          <div className="Tilt-inner"> 
            <img style={{padding:'1px 1px 1px 1px'}} height="110" weight="110" alt='logo' src={brain}/>
          </div>
         </Tilt>
       </div>
    );
}

export default Logo;
