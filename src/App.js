import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Layouts/Header/Header';
import Sidebar from './Layouts/Sidebar/Sidebar';

function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [theme, setTheme] = useState(false);

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    const changeTheme = (event) => {
      event.preventDefault();
      setTheme(!theme);
    };
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} theme={theme} setTheme={setTheme} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} theme={theme} setTheme={setTheme} />
        <Dashboard theme={theme} setTheme={setTheme} />
      </div>
    )
  }

export default App;