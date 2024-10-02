import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-[#07B0CE] border-b-2 border-[#07B0CE] font-semibold mr-2' : 'font-semibold hover:text-[#07B0CE] hover:border-b-2 border-[#07B0CE] text-white'
        } to="/">Home</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-[#07B0CE] border-b-2 border-[#07B0CE] font-semibold mr-2' : 'font-semibold hover:text-[#07B0CE] hover:border-b-2 border-[#07B0CE] text-white'
        } to="/student">Student Portal</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-[#07B0CE] border-b-2 border-[#07B0CE] font-semibold mr-2' : 'font-semibold hover:text-[#07B0CE] hover:border-b-2 border-[#07B0CE] text-white'
        } to="/faculty">Faculty Overview</NavLink></li>
    </>;

    return (
        <div className="navbar">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl text-white">OceanCapp University</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                <Link to='/enroll' className="hidden lg:block rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#07B0CE] text-white">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#07B0CE] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-white transition duration-300 group-hover:text-white ease">Enroll in Courses</span>
                </Link>

                <div className="dropdown dropdown-end lg:hidden text-white ">
                    <label tabIndex={0} className="btn btn-ghost">
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
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-44 right-0"
                    >
                        {navLinks}
                        <Link to='/enroll' className="block lg:hidden rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#07B0CE] text-white">
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#07B0CE] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-white transition duration-300 group-hover:text-white ease">Enroll in Courses</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
