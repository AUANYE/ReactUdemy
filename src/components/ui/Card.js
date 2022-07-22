import React from "react";
import classes from "./Card.module.css";

function Card(props) {
    // props.children คือการนำข้อมูลภายใต้แท็ก Card ออกมาแสดง
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;