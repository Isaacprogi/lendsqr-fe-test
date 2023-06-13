import '../../styles/css/NavBar.css'
import { useState } from 'react'
import UNION from '../../assets/svg/login/union.svg'
import LENDSQR from '../../assets/svg/login/lendsqr.svg'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiFillBell } from 'react-icons/ai'
import Me from '../../assets/images/Profile.png'
import { HiDocument } from 'react-icons/hi'

export const NavBar = () => {
  const [displayDrawer, setDisplayDrawer] = useState<Boolean>(false)


  const handleDisplayDrawer = () => {
    setDisplayDrawer(!displayDrawer)
  }



  return (
    <div className='nav-bar'>

      <div className='logo-search-section'>
        <div className='logo'>
          <img className='union' src={UNION} alt="union-icon" />
          <img className='lendsqr' src={LENDSQR} alt="lendsqr-icon" />
        </div>
        <div className='search'>
          <input type="text" placeholder='search for anything' />
          <span className='search-icons-box'>
            <FaSearch data-testid="search-icon" className='search-icon' />
          </span>
        </div>
      </div>


      <div className='others'>
        <span data-testid="docs-span" className='docs'>Docs</span>
        <IoMdNotificationsOutline data-testid="notification-icon" className='notification-icon' />
        <img src={Me} alt="avatar" className='avatar' />
        <div>
          <span data-testid='user-name-1'>Adeji</span>
          <IoMdArrowDropdown data-testid="arrow-down-icon" className='drop-down-icon' />
        </div>
      </div>

      <span data-testid='users-span' onClick={handleDisplayDrawer} className={`user-img-logo`}>
        <div data-testid='users-div' className={`${displayDrawer ? "hidden" : ""}`}>
          <img src={Me} alt="" />
        </div>
      </span>

      <div data-testid='right-drawer' className={`right-drawer ${displayDrawer ? "visible" : ""} `}>

        <div data-testid='fatimes-span' onClick={handleDisplayDrawer} className="cancel">
          <FaTimes data-testid="times-icon" />
        </div>

        <div className='profile-top'>
          <span className='avatar'>
            <img data-testid='avatar' src={Me} alt="" />
          </span>
          <span data-testid="user-name-2">Adeji</span>
        </div>

        <div className="drawer-list">
          <span data-testid='drawer-list-1'>
            <div className='drawer-list-icons'>
              <AiFillBell data-testid='notification-drawer-icon' />
            </div>
            Notifications
          </span>

          <span data-testid='drawer-list-2'>
            <div className='drawer-list-icons'>
              <HiDocument data-testid='docs-drawer-icon' />
            </div>
            Docs
          </span>
        </div>
      </div>

    </div>
  )
}
