import React from 'react';
import themeProps from "../themeProps";



const Button = ({ children, color, ...rest }: any) => {
  return (
    <button onClick={() => { }} className={`rounded-md bg-${color} text-text-base px-3 py-1`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  ...themeProps,
};

Button.defaultProps = {
  color: "primary",
};

export default Button;