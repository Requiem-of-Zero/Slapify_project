import React, { Component } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about-wrapper">
          <img 
            src="https://i.ibb.co/5Ggdm8M/sam-wong.jpg" 
            className='selfie fade-in'
          />
          <div className="introduction fade-in2">
            <p>Hi, my name is <span class='green'>Sam</span>. No, not with green eggs and ham. But I am, a<span class='green'> fullstack software engineer </span> 
            from <span class='green'>San Francisco</span>. Please feel free to <span class='under-green'>connect with me</span> on any of the platforms below if you have 
            <span class='under-green'> any questions</span> or you are interested in what I am currently working on<span class='green'>!</span></p>
          </div>
        </div>
        <div className="about-links fade-in2">
          <a 
            href="https://github.com/Requiem-of-Zero"
            target="_blank" 
            rel="noopener noreferrer"
          ><AiFillGithub className='github' size={150}/>
          </a>
          <a 
            href="https://www.linkedin.com/in/samuel-wong-61368a194/"
            target="_blank" 
            rel="noopener noreferrer"
          ><AiFillLinkedin className='linkedin' size={150}/>
          </a>
          <a 
            href="https://angel.co/u/samuel-wong-21"
            target="_blank" 
            rel="noopener noreferrer"
          ><FaAngellist className='angellist' size={150}/>
          </a>
        </div>
      </>
    )
  }
}
