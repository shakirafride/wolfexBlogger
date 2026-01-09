import React, { Fragment, useState } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Modern Style',
                link: '/home'
            }
        ]
    },
    {
        id: 6,
        title: 'Explore',
        link: '#',
        submenu: [
            {
                id: 61,
                title: 'Articles',
                link: '/blog'
            },
            {
                id: 68,
                title: 'Sign In',
                link: '/login'
            },
            {
                id: 69,
                title: 'Sign Up',
                link: '/register'
            }
        ]
    },
    {
        id: 7,
        title: 'Culture',
        link: '/lifestyle',
    },
    {
        id: 8,
        title: 'Cuisine',
        link: '/foods',
    },
    {
        id: 10,
        title: 'Journey',
        link: '/travels',
    },

    {
        id: 5,
        title: 'Stories',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Featured Stories',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Latest Updates',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Full Coverage',
                link: '/blog-fullwidth'
            }
        ]
    },

]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        to={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;