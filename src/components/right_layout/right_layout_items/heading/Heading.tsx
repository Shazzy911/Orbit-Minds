import React from 'react'
import style from "./Heading.module.scss";

interface headingType{
    heading: string;
}



const Heading: React.FC<headingType> = (props) => {
  return (
    <>
    <h1 className={style.heading}>{props.heading}</h1>
    </>
  )
}

export default Heading