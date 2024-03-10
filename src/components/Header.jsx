import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" flex justify-center bg-blue-500 text-white h-16 p-10 items-center">
      <nav className="flex gap-5 list-none font-bold text-lg">
        <Link to="/">Home</Link>
        <span>-</span>
        <Link to="/about">About</Link>
        <span>-</span>
        <Link to="/blog">Blog</Link>
        <span>-</span>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
