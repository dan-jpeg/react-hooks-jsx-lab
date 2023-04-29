import React from "react";
import { image } from "../data/data";

function About() {
  return <div id='about'>
    <h2>About Me</h2>
    <p>hello, i am a 29 year old fullstack developer interested in visual art, design, and music.</p>
    <img src={image} alt='I made this' />
    </div>;
}

export default About;
