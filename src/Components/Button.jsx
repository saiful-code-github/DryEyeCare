import React from 'react'
import { CButton } from '@coreui/react';
import { NavLink } from 'react-router-dom';
const Button = (props) => {
  const {children, style, className="", text, to="/"} = props;
  //default style

    const deafultStyle = {
         background: "var(--gradient-color)",
         color: "var( --white-color)",
         textTransfrom :'capitalize',
         padding: "9px 15px",
         borderRadius: "5px",
         border:"none",
         shadow:"2px 2px 2px 1px rgb(0 0 0 / 20%)",

    };
    const conbineStyle = {...deafultStyle, ...style};
  return (
    <>
     <CButton style={conbineStyle} className={className}><NavLink className={`navlink ${className ? "text-white" : 'text-black' }`} to={to}>
        {text || children}
      </NavLink></CButton>
    </>
  )
}

export default Button;