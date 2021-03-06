import React from 'react';
import projects from './Projects';
import { AiFillGithub } from "react-icons/ai";
import travelblog from './img/travelblog.png';
import fitnesstracker from './img/fitnesstracker.PNG';
import dayplanner from './img/dayplanner.PNG';
import passwordgen from './img/passwordgen.PNG';
import readmegen from './img/readmegen.PNG';
import artWatch from './img/artwatchphoto.PNG';
import backgroundImage from './img/coding2.jpg';



export default function Portfolio() {
    
   

    return(
        <div className='row justify-content-evenly' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <article className="project1" className="container-md border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[0].name}</h3>                
                <a href={projects[0].deployedLink} target="_blank"><img className='projectImg' src={passwordgen}/></a>                
                <a href={projects[0].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25'/></a>
                <div class="mt-2 border"></div>
                <p>{projects[0].description}</p>
            </article>
            <article className="project2" className="border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[1].name}</h3>                
                <a href={projects[1].deployedLink} target="_blank"><img className='projectImg' src={dayplanner}/></a>                
                <a href={projects[1].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25' /></a>
                <div class="mt-2 border"></div>
                <p>{projects[1].description}</p>
            </article>
            <article className="project3" className="border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[2].name}</h3>                
                <a href={projects[2].deployedLink} target="_blank"><img className='projectImg' src={readmegen}/></a>                
                <a href={projects[2].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25' /></a>
                <div class="mt-2 border"></div>
                <p>{projects[2].description}</p>
            </article>
            <article className="project4" className="border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[3].name}</h3>                
                <a href={projects[3].deployedLink} target="_blank"><img className='projectImg' src={fitnesstracker}/></a>                
                <a href={projects[3].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25' /></a>
                <div class="mt-2 border"></div>
                <p>{projects[3].description}</p>
            </article>
            <article className="project5" className="border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[4].name}</h3>                
                <a href={projects[4].deployedLink} target="_blank"><img className='projectImg' src={travelblog}/></a>                
                <a href={projects[4].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25' /></a>
                <div class="mt-2 border"></div>
                <p>{projects[4].description}</p>
            </article>
            <article className="project6" className="border col-md-3 p-3 m-3">
                <h3 className="text-center p-2">{projects[5].name}</h3>                
                <a href={projects[5].deployedLink} target="_blank"><img className='projectImg' src={artWatch}/></a>                
                <a href={projects[5].repoLink} target="_blank" className='githubLink'><br/><AiFillGithub size='25' /></a>
                <div class="mt-2 border"></div>
                <p>{projects[5].description}</p>
            </article>
        </div>
        
    );
};