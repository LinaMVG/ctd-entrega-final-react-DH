import React from 'react'
import { useContextGlobal } from './utils/global.context';
import "../Styles/footer.css"

const Footer = () => {
  const { state } = useContextGlobal();

  return (
    <footer className={`footer footer-${state.theme}`}>

      <div className="footer-top">
        <p>FrontEnd III DH 2024 - Elizabeth Peña & Lina M Velásquez - Camada 4</p>
      </div>

      <div className="footer-content">
        <div className="footer-powered">
          <p>Powered by</p>
          <img src="/images/DH.png" alt="DH-logo" className="footer-logo-img" />
          </div>
        
        <div className="footer-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="public\images\ico-facebook.png" alt='Facebook' className="icon"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="public\images\ico-instagram.png" alt='Instagram' className="icon"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="public\images\ico-tiktok.png" alt='TikTok' className="icon"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="public\images\ico-whatsapp.png" alt='WhatsApp' className="icon"/>
            </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
