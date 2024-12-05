import React from 'react'
import { useContextGlobal } from './utils/global.context';
import styles from '../Styles/Footer.module.css';

const Footer = () => {
  const { state } = useContextGlobal();

  return (
    <footer className={`${styles.footer} ${styles[`footer-${state.theme}`]}`}>

      <div className={styles['footer-top']}>
        <p>FrontEnd III DH 2024 - Elizabeth Peña & Lina M Velásquez - Camada 4</p>
      </div>

      <div className={styles['footer-content']}>
        <div className={styles['footer-powered']}>
          <p>Powered by</p>
          <img src="/images/DH.png" alt="DH-logo" className={styles['footer-logo-img']} />
          </div>
        
        <div className={styles['footer-icons']}>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-facebook.png" alt='Facebook' className={styles.icon}/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-instagram.png" alt='Instagram' className={styles.icon}/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-tiktok.png" alt='TikTok' className={styles.icon}/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-whatsapp.png" alt='WhatsApp' className={styles.icon}/>
            </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
