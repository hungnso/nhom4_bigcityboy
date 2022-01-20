import React, { useRef, useContext } from 'react'
import './styles.css'
import { useOutsideClick } from './useOutsideClick'
import { AuthContext } from '../Context/AuthProvider'

function LogOut() {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useOutsideClick(dropdownRef, false)
  const onClick = () => setIsActive(!isActive)

  const {
    user: { displayName, uid, photoURL }
  } = useContext(AuthContext)

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>{displayName}</span>
        <img src={photoURL} alt="User avatar" />
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li>
            <button>Đăng Xuất</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LogOut
