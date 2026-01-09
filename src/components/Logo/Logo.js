import React from 'react';
import './Logo.css';

const Logo = ({ className = "", onClick }) => {
    return (
        <div className={`modern-logo ${className}`} onClick={onClick}>
            <span className="logo-text">
                <span className="logo-main">Modern</span>
                <span className="logo-sub">Mag</span>
            </span>
        </div>
    );
};

export default Logo;