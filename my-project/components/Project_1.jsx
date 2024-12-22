// import React from 'react'
import "./Project_1.css"
export default function Project_1() {
    return (
        <>
            <header className="header1">
                <img src="logo.png" alt="Logo" className="image" />
                <div className="location_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                        <path d="M12 2C8.686 2 6 4.686 6 8c0 4.408 6 12 6 12s6-7.592 6-12c0-3.314-2.686-6-6-6zm0 8.5c-1.378 0-2.5-1.122-2.5-2.5S10.622 5.5 12 5.5s2.5 1.122 2.5 2.5S13.378 10.5 12 10.5z" />
                    </svg>
                </div>

                <div className="location_info">
                    <span className="span1">Deliver to</span>
                    <span className="span2">Pakistan</span>
                </div>

                <div className="search_bar">
                    <select name="dropdown" className="dropdownlist">
                        <option value="all">All</option>
                        <option value="amazon">Amazon</option>
                    </select>
                    <input type="search" name="search" placeholder="search Amazon" className="inside_search" />
                    <button type="search" className="search_button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </div>
                    <select name="dropdown" className="lang_dropdown">
                        <option value="en">English - EN</option>
                        <option value="es">Español - ES</option>
                        <option value="ar">العربية - AR</option>
                        <option value="de">Deutsch - DE</option>
                        <option value="he">עברית - HE</option>
                        <option value="ko">한국어 - KO</option>
                        <option value="pt">Português - PT</option>
                        <option value="zh-cn">中文(简体) - ZH</option>
                        <option value="zh-tw">中文(繁體) - ZH</option>
                    </select>
            </header>

            <header className="header2">
                <select name="menue" className="menue_bar">
                    <option value="all">All</option>
                </select>
                <div className="options_header_2">
                    <button>Today's Deal</button>
                    <button>Customer Service</button>
                    <button>Registry</button>
                    <button>Gift Card</button>
                    <button>Sell</button>
                </div>

            </header >
        </>
    )
}
