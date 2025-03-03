// components/contact/ContactInfoItem.jsx
import React from 'react';

const ContactInfoItem = ({ icon, title, content, gradient }) => (
  <div className="flex items-center space-x-3">
    <div className={`p-3 rounded-full bg-gradient-to-r ${gradient} text-white`}>
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-gray-800 dark:text-gray-200">{content}</p>
    </div>
  </div>
);

export default ContactInfoItem;
