import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import logo from '../assests/logo.png';

function Header() {
  return (
    <div className="relative">
      <header className="fixed left-0 right-0 top-0 z-[9000] flex items-center justify-between border-b border-stone-200 bg-cstgoldyellow px-4 py-3 uppercase sm:px-6">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        <SearchOrder />
        <Username />
      </header>
    </div>
  );
}

export default Header;
