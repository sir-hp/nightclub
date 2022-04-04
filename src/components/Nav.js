/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom';
import minilogo from '../assets/Logo.png'

const Nav = () => {
    const body = css`
        display: flex;
        border: solid 2px #ff2a70;
        background-color: #030203CC;
        align-items: center;
        padding: 1em;
        div{
            width: 15%;
            margin:0 10%;
        }
        ul {
            display: flex;
            justify-content: space-between;
            width: 65%;
            margin-right: 10%;
            list-style-type: none;
            a {
                text-decoration: none;
            }
            .active{
                color: #ff2a70;
                text-decoration: underline 3px;
            }
        }
        
        
    `
    return (
        <nav css={body}>
                    <div className='navLogo'>
                        <img src={minilogo} alt="logo" />
                    </div>
                    <ul>
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/booking">BOOK TABLE</NavLink></li>
                        <li><NavLink to="/contact">CONTACT US</NavLink></li>
                    </ul>
                </nav>
    );
}

export default Nav;