import '../../styles/css/NavBar.css';
import { useState } from 'react';
import UNION from '../../assets/svg/login/union.svg';
import LENDSQR from '../../assets/svg/login/lendsqr.svg';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { IoMdNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io';
import Me from '../../assets/images/Profile.png';
import { FaBars } from 'react-icons/fa';
import { SideBar } from '../SideBar/SideBar';
import { motion } from 'framer-motion';

export const NavBar = () => {
  const [displayDrawer, setDisplayDrawer] = useState(false);

  const handleDisplayDrawer = () => {
    setDisplayDrawer(!displayDrawer);
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <span data-testid='fa-bars' onClick={handleDisplayDrawer} className='fa-bars'>
        <FaBars onClick={toggleMenu} />
      </span>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed-element"
      >
        <div>
          <FaTimes data-testid="fa-times" className="fa-times" onClick={toggleMenu} size={24} />
          <SideBar />
        </div>
      </motion.div>
    </div>
  );
};
