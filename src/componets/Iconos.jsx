import React, { Component } from 'react';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

class Iconos extends Component {
  render() {
    return (
    <div >
      <FaInstagram className='iconos'/>
      <FaFacebook className='iconos'/>
      <FaGithub className='iconos'/>
    </div>
    ) 
  }
}

export default Iconos