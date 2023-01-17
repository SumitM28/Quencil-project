
import './navbar.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import logo from '../../img/logo.png'
const Navbar = () => {
    const [toggle, setTogle] = useState(true)
    return (
        <nav className='navbar' id='navbar'>
            <div className="navContainer">
                <img src={logo} alt="" className='navLogo'/>
                <div className="navMenu">
                    <a className='navItems' href='/'>Home</a>
                    <a className='navItems' href='/'>Career Camp</a>
                    <a className='navItems' href='/'>Technical Course</a>
                    <a className='navItems' href='/' >Non Technical Course</a>
                    <a className='navItems' href='/'>Training Journey</a>
                    <a className='navItems' href='/' >Contact us</a>
                </div>
                {
                    !toggle &&

                    <div className="navMenuToggle">
                        <a className='navItems' href='/'>Home</a>
                        <a className='navItems' href='/'>Career Camp</a>
                        <a className='navItems' href='/'>Technical Course</a>
                        <a className='navItems' href='/' >Non Technical Course</a>
                        <a className='navItems' href='/'>Training Journey</a>
                        <a className='navItems' href='/' >Contact us</a>
                    </div>
                }
                <div className="navToggle">
                    {
                        toggle ?
                            <AiOutlineMenu className='togglebtn' onClick={() => setTogle(false)} />
                            :
                            <AiOutlineClose className='togglebtn' onClick={() => setTogle(true)} />
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar