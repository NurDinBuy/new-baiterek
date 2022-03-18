import React from 'react';
import './header.css'
import logo from '../images/logoBaiterek.svg'
import phoneSVG from '../images/phone.svg';
import {Routes, Route, Link} from 'react-router-dom'
import Stocks from '../pages/stocks/stocks'
import HomePage from "../pages/home-page";
import StockDetails from "../pages/stocks-details";
import SaleInformation from "../pages/saleInformation";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src={logo}/></Link>
                </div>
                <div className="links">
                    <Link className="link" to="">Проекты</Link>
                    <Link className="link" to="/stocks">Акции</Link>
                    <Link className="link" to="">Способы Покупки</Link>
                    <Link className="link" to="">Новости</Link>
                </div>
                <div className="phone">
                    <img src={phoneSVG}/>
                    444
                </div>
            </div>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/stocks' element={<Stocks/>}/>
                <Route path='/details' element={<StockDetails/>}/>
                <Route path='/saleInfo' element={<SaleInformation/>}/>
            </Routes>
        </>
    );
};

export default Header;