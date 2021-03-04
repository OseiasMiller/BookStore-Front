import React from 'react'

export default function Menu() {
    return (
        <nav role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" href="#" className="brand-logo">Book Store</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Procurar</a></li>
                    <li><a href="#">Favoritos</a></li>
                </ul>
            </div>
        </nav>
    )
}