import React from 'react';
import "./header.css"
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasketLoaded } from "react-icons/sl";
import { IoAdd } from "react-icons/io5";







const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <div className="header_logo">
                        <Link to="/home">TO DO</Link>
                    </div>
                    <div className="header_input">
                        <input type="text" />
                        <button><CiSearch /></button>
                    </div>
                    <div className="header_pages">
                        <Link to=""><MdFavoriteBorder /></Link>
                        <Link to="/basket"><SlBasketLoaded /></Link>
                        <Link to="/admin"><IoAdd /></Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;