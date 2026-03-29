import { Link, NavLink } from "react-router-dom";
import { navCategories, routeLinks } from "../assets/siteData";

export default function Navbar({ mobileBottom = false, showSearch = true }) {
  if (mobileBottom) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-[100] flex justify-around items-center border-t border-outline-variant/10 bg-[#131313]/90 py-4 backdrop-blur-lg md:hidden">
        {routeLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "text-[#00E5FF]" : "text-gray-500"
              }`
            }
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            <span className="font-label text-[8px] uppercase">{item.label}</span>
          </NavLink>
        ))}
      </div>
    );
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex w-full max-w-none items-center justify-between bg-[#131313] px-6 py-4">
      <div className="flex items-center gap-8">
        <Link
          className="font-headline text-2xl font-black italic tracking-tighter text-[#FF003C]"
          to="/"
        >
          S3ADA
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navCategories.map((item, index) => (
            <a
              key={item}
              className={`font-label text-sm uppercase tracking-widest transition-colors duration-300 ${
                index === 0
                  ? "border-b-2 border-[#FF003C] pb-1 text-[#FFB3B2]"
                  : "text-gray-400 hover:text-[#FF003C]"
              }`}
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {showSearch ? (
          <div className="hidden items-center gap-2 border-l-2 border-[#FF003C] bg-surface-container-low px-4 py-2 lg:flex">
            <span className="material-symbols-outlined text-sm text-gray-400">
              search
            </span>
            <input
              className="w-48 border-none bg-transparent font-label text-xs uppercase tracking-widest text-on-surface focus:ring-0"
              placeholder="SEARCH ASSETS..."
              type="text"
            />
          </div>
        ) : null}
        <div className="flex items-center gap-3">
          <button className="material-symbols-outlined text-on-surface transition-colors hover:text-primary">
            language
          </button>
          <Link
            className="material-symbols-outlined text-on-surface transition-colors hover:text-primary"
            to="/checkout"
          >
            shopping_cart
          </Link>
          <div className="mx-1 h-4 w-[1px] bg-outline-variant" />
          <button className="font-label text-sm uppercase tracking-widest text-gray-400 transition-colors hover:text-white">
            Login
          </button>
          <button className="bg-primary-container px-4 py-2 font-label text-sm uppercase tracking-widest text-on-primary-container duration-200 hover:scale-95">
            Signup
          </button>
        </div>
      </div>
    </header>
  );
}