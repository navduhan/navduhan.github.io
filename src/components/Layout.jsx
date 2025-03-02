import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark 
       px-6 sm:px-12 md:px-24 lg:px-32 xl:px-40 
       py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 ${className}`}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;