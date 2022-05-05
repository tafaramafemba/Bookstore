import { Link } from 'react-router-dom';
import '../Nav.css';

function Nav() {
    return (
      <div>
        <nav>
          <h3 className='h3'>Bookstore CMS</h3>
          <ul className='ul'>
            <Link to="/">
            <li className='bookslink'>Books</li>
            </Link>
            <Link to="/Categories">
            <li className='link'>Categories</li>
            </Link>        
          </ul>
          <button className='user'></button>
        </nav>
      </div>
    );
  }

export default Nav;