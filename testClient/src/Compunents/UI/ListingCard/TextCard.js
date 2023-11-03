import React from 'react'
import { useMediaQuery } from "react-responsive";


function TextCard({ title, text, number }) {
  const isMobile = useMediaQuery({ maxWidth: 576 });
const isExtended = useMediaQuery({ minWidth: 1600 });
const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 });
const isXL = useMediaQuery({ minWidth: 1200 });

    return (
      <div className="text-card">
       
        <div  className='d-flex'style={{padding:isMobile?"":"" ,width:isMobile?"":isXL?"350px":"" }}>
            <div>
            <h3 style={{fontSize:"20px",fontFamily:"Open Sans",fontWeight:"600"}}>{number}</h3> 
            </div>
            <div style={{marginLeft:"10px"}}>
            <h3 style={{fontSize:"24px",fontFamily:"Playfair Display",fontWeight:"700"}}>{title}</h3>    <p style={{fontSize:"16px",fontFamily:"Open Sans",fontWeight:"400"}}>{text}</p>
            </div>
            
        </div>
      </div>
    );
  }

export default TextCard