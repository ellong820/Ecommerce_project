import React from 'react';


class Header extends React.PureComponent {
  render () {
    return (
      <div>
        <ul className='menu-list'>
            <li><a href="#">New</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">New</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;