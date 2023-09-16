import {BsPersonCircle} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import './header.css';

function Header({OpenSidebar, theme}) {
  const width = window.innerWidth;

  const allClassName = `header ${theme ? 'dark-header' : ''}`;

  return (
    <header className={allClassName}>
        <div className='header-left'>
            <GiHamburgerMenu  className='icon' onClick={ width < 768 ? OpenSidebar : undefined}/> LOOP
        </div>
        <div className='header-right'>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header;