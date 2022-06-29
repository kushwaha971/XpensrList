import React from 'react'
import './header.css';


const Header = () => {
  const blank = "-blank"
  return (
    <>
      <div className='header_container'>
        <div className='header'>
          <div className='header_logo'>
            Xpensr <i className="fi fi-rr-credit-card">.</i>
          </div>
          <div className='header_button'>
            <a href="http://github.com" target={blank}> <i class="devicon-github-original"></i>Star</a>
          </div>

        </div>
      </div>  
    </>
  )
}
 
export default Header;