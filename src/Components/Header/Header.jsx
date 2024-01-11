import { FaFontAwesomeFlag, FaArrowRight, FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Start</a>
              </li>
              <li>
                <a>
                  <FaSearch />
                </a>
              </li>
              <li>
                <a>Icons</a>
              </li>
              <li>
                <a>Docs</a>
              </li>
              <li>
                <a>Plans</a>
              </li>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>Podcast</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-center lg:text-left">
            <FaFontAwesomeFlag />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] font-thin">
            <li>
              <a>Start</a>
            </li>
            <li>
              <a>
                <FaSearch />
              </a>
            </li>
            <li>
              <a>Icons</a>
            </li>
            <li>
              <a>Docs</a>
            </li>
            <li>
              <a>Plans</a>
            </li>
            <li>
              <a>Support</a>
            </li>
            <li>
              <a>Podcast</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="text-2xl">
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
