import React from 'react';


class Header extends React.PureComponent {
  render () {
    return (
      <div>
        <ul className='list flex flex-row f4'>
            <li className='ph3'><a className="no-underline" href="#">New</a></li>
            <li className='ph3'><a className="no-underline" href="#">Women</a></li>
            <li className='ph3'><a className="no-underline" href="#">Men</a></li>
            <li className='ph3'><a className="no-underline" href="#">Kids</a></li>
            <li className='ph3'><a className="no-underline" href="#">Sale</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;