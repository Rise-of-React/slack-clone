import React from 'react'
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Avatar
                    className="header_avatar"
                    alt='Ra'
                    src=''
                />
                <AccessTimeIcon />
                {/* Avaters for logged in user*/}
                {/* Time icon */}
            </div>
            <div className="header_search">
                {/* Search icon */}
                <SearchIcon />
                <input placeholder="Search" />

                {/* input */}
            </div>
            <div className="header_right">
                <HelpOutlineIcon />
                {/* help icon */}
            </div>
        </div>
    )
}

export default Header
