import React from "react";

function Footer() {
  return (
    <footer fixed="bottom"
      className="bg-secondary text-white text-center p-3  mt-5 rounded-top"
      
    >
      &copy; {new Date().getFullYear()} LEMINE MBARECK
    </footer>
  );
}

export default Footer;
