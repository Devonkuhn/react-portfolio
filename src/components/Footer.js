import React from 'react';
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineFontSize, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return(
        <div className='footer'>
            <Row>
                <Col md='4'>
                    <p>Designed and Developed by Devon Kuhn</p>
                </Col>
                <Col md='4'>
                    <p>Est. 2022</p>           
                </Col>
                <Col md='4'>
                    <ul className='iconLinks'>
                        <li className='iconLinks'>
                            <a href="https://github.com/Devonkuhn" target='_blank' style={{ color: 'white' }}><AiFillGithub size='25px' /></a>
                        </li>
                        <li className='iconLinks'>
                            <a href="https://www.linkedin.com/in/devon-kuhn-51a295215/" target='_blank' style={{ color: 'white' }}><FaLinkedinIn size='25px'/></a>
                        </li>
                        <li className='iconLinks'>
                            <a href="https://www.instagram.com/devkuh/" target='_blank' style={{ color: 'white' }}><AiOutlineInstagram size='25px' /></a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};