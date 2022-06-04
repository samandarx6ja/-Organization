import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img className='logo' src={require('../img/Logo.png')} alt="logo" />
        <div className='nav__link'>
            <Link to="/">Проекты</Link>
            <Link to="/about">О нас</Link>
            <Link to="/services">Услуги</Link>
            <Link to="/prices">Цены</Link>
            <Link to="/articles">Статьи</Link>
            <Link to="/jobs">Вакансии</Link>
            <Link to="/contacts">Контакты</Link>
            
        </div>
        <a href="tel:123-456-7890">
          {' '}
          <span></span> +7 (495) 755-02-29
        </a>
      </div>
    </div>
  )
}

export default Navbar
