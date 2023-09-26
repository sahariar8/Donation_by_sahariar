import { NavLink } from "react-router-dom"



const Header = () => {
    const Item = <>

          <NavLink to="/"  className={({ isActive, isPending }) =>isActive? "text-red-600 underline": isPending? "pending": ""}>Home</NavLink>
          <NavLink to="/donation"  className={({ isActive, isPending }) =>isActive? "text-red-600 underline": isPending? "pending": ""}>Donation</NavLink>
          <NavLink to="/statistics"  className={({ isActive, isPending }) =>isActive? "text-red-600 underline": isPending? "pending": ""}>Statistics</NavLink>
          
        
         </>
    return (
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 28 28"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="py-4 menu  dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 font-semibold"
              >
                {Item}
              </ul>
            </div>
           <img src="../Resources/Logo.png" alt="" />
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl items-center gap-10">{Item}</ul>
          </div>
        </div>
      </div>
    );
};

export default Header;