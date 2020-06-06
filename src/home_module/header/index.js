import React, { Component } from 'react'
import './style.scss'
import MenuModal from './MenuModal'

 class Header extends Component {
    render() {
        return (
            <div className='header_nav' >
                <div className='logo'><span className='first_char'>S</span>ea movie</div>
                <div className='menu' >
                    <ul>
                        <li><a href='#'>Lịch chiếu</a></li>
                        <li><a href='#'>Rạp chiếu</a></li>
                        <li><a href='#'>Giá vé</a></li>
                        <li><a href='#'>Khuyến mại</a></li>
                    </ul>
                </div>
                <div className='sign' >
                    <span><a href='#'>Sign in </a></span>/
                    <span><a href='#'> Sign up</a></span>
                </div>
                <div className="menu_icon" data-toggle="modal" data-target="#menuModal">
                    <button className='btn '>Đăng nhập</button>
                    <i className="fas fa-bars" /></div>
<MenuModal />
            </div>
        )
    }
}

export default Header;
