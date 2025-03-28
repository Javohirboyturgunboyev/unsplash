import { Link } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "Register",
  },
  {
    path: "/contact",
    text: "Login",
  },
  {
    path : "/myself",
    text: "Myself"
  }

];
function NavLinks() {
  return (
    <>
      {" "}
      {navLinks.map((link) => {
        return (
          <li key={link.path}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
