import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>
                            Acceuil
                        </li>
                    </NavLink>
                    <NavLink to="/wishlist" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>
                            Liste d'Envie
                        </li>
                    </NavLink>
                </ul>
            </nav>
            <h1>
                First E-commerce
            </h1>
        </div>
    );
};

export default Header;