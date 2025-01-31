import React from 'react';

const MenuItem = ({ href, children }) => (
  <a href={href} className="text-gray-700 hover:text-blue-600">
    {children}
  </a>
);

export default MenuItem;
