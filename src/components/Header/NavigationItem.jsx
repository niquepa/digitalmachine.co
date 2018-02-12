import React from 'react';

const NavigationItem = (props) => {
  const { section, subsections } = props;
  return (
    <li>
      <a href={section.url}>{section.title}</a>
      {subsections &&
        <ul>
          <NavigationItem />
        </ul>
      }
      <ul>
        <li className="selected"><a href="index.html">Creative</a></li>
        <li><a href="index-corporate.html">Corporate</a></li>
        <li><a href="index-business.html">Business</a></li>
        <li><a href="index-portfolio.html">Portfolio</a></li>
        <li><a href="index-one-page.html">One Page Theme</a></li>
        <li><a href="index-landing.html">Landing Page</a></li>
      </ul>
    </li>
  );
};

export default NavigationItem;
