import React from 'react';
import {
    NavLink
} from 'react-router-dom';

const selectedStyle = {
    backgroundColor: 'white',
    color: 'slategray'
}
const MainMenu = ()=> (
    <nav className='width200'>
        <NavLink to='/'>首页</NavLink>
        <NavLink to='about' activeStyle={selectedStyle}>关于</NavLink>
    </nav>
)

export default MainMenu;