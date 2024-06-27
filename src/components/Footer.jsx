import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
        <div className='container footer-container'>
        <ul className='footer-categories'>
        <li><Link to={'/posts/categories/Education'}>Education</Link></li>
        <li><Link to={'/posts/categories/Techology'}>Techology</Link></li>
        <li><Link to={'/posts/categories/Software'}>Software Development</Link></li>
        <li><Link to={'/posts/categories/AI'}>Artificial Intelligence</Link></li>
        <li><Link to={'/posts/categories/Bitcion'}>Bitcoin</Link></li>
        <li><Link to={'/posts/categories/Politics'}>Politics</Link></li>
        <li><Link to={'/posts/categories/Health'}>Health</Link></li>
        <li><Link to={'/posts/categories/Sports'}>Sports</Link></li>
        <li><Link to={'/posts/categories/Television'}>elevision Market</Link></li>
        <li><Link to={'/posts/categories/Travelling'}>TravellingMarket</Link></li>
        <li><Link to={'/posts/categories/Music'}>Music</Link></li>
      </ul>
      <div className='footer-copyright'>
            <small>&copy; Copyright All Rights Reeserved || Kaushik Borah @ NITS</small>
      </div>
        </div>
    </footer>
  )
}
