import { Link } from 'react-router-dom'
import '../assets/css/nav.css'

const Navigation = () => {
    return (
        <nav>
        <div className="logo">
        
          <span id="bay">Bay</span><span id="max">max</span>
        </div>
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars" />
        </label>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/tentang">Visi</a></li>
          <li><a href="/tentang">Misi</a></li>
          <li><a href="/tentang">Tentang</a></li>
          <li><a href="/kontak">Contact</a></li>
          <Link to='/login'><button>Login</button></Link>
        </ul>
      </nav>
    )
}

export default Navigation