import Link from 'next/link';
import './style.css';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <Link href='/' className='route-link'>
            Home
          </Link>
          <Link href='/blog' className='route-link'>
            Blog
          </Link>
          <Link href='/items' className='route-link'>
            Items
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
