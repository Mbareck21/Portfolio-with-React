import React from "react";

function Footer() {
  return (
    <footer
      className="footer bg-secondary text-white text-center p-3 "
      fixed="bottom"
    >
      &copy; {new Date().getFullYear()} LEMINE MBARECK
    </footer>
  );
}

export default Footer;
