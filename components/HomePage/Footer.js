import React from 'react';
import logo from '../../Assets/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";

export default function Footer() {

  const style = {
    fontSize: "4rem",
    cursor: "pointer"
  }

  return (
    <div className='footer'>
      <div className='footer-left'>
        <div className='footer-logo'>
          <img className='footer-img' src={logo} alt="Hamburger" />
        </div>
        <div className='footer-about'>
          <p>Terms of Service · Privacy Policy</p>
          <p>Demo or it didn't happen.</p>
          <p>©2023 Restoran</p>
          <p>Restoran</p>
        </div>
        <div className='footer-social-medias'>
          <InstagramIcon style={style} />
          <FacebookIcon style={style} />
          <YouTubeIcon style={style} />
          <TwitterIcon style={style} />
        </div>
      </div>
      <div className='footer-center'>
        <div className='footer-images'>
          <div className='footer-img'></div>
        </div>
        <div className='footer-section-container'>
          <div className='footer-sections'>
            <Link to='/'>HOME</Link>
            <Link to='/menu'>MENU</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/basket'>BASKET</Link>
          </div>
          <div className='footer-sections'>
            <Link to='/'>SECTION</Link>
            <Link to='/'>SECTION</Link>
            <Link to='/'>SECTION</Link>
            <Link to='/'>SECTION</Link>
          </div>
          <div className='footer-sections'>
            <Link to='/'>SECTION</Link>
            <Link to='/'>SECTION</Link>
            <Link to='/'>SECTION</Link>
            <Link to='/'>SECTION</Link>
          </div>
        </div>
      </div>
      <div className='footer-right'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12139.845152322221!2d49.717012276790854!3d40.47612143133381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403085750a9f3d61%3A0x24e5c126412d760!2sBaku%20Engineering%20University!5e0!3m2!1saz!2saz!4v1696619500180!5m2!1saz!2saz"
          className='map'
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}