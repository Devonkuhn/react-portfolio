import React from 'react';
import myPhoto from './img/profilepic.JPG'
import backgroundImage from './img/coding2.jpg';

export default function About() {
    return(
        <div className='container-fluid about' style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className='container-md row justify-content evenly'>
                <div className='col-sm-3 '>
                    <img className='myPhoto' src={myPhoto}/>                
                </div>
                <div className='col-sm-7 myBio'>
                Hey there! Thanks for visiting my page. My name is Devon and i am a Web developer based in Cincinat, OH. I am currently working full-time driving forkilfts but have decided to pursue my passion for computers and technology. In my free time i enjoy playing First-Person MMO's and have a deep intrest for designing Web apps, Video games and various other related technologies. Please feel free to contact me or view some of my work above. :)
                </div>
            </div>            
        </div>
    );
};