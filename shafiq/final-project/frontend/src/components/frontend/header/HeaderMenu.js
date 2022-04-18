import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = ({menuList}) => {
    console.log(menuList);
  return (
    <div className='menu_container'>
        <div className="w3ls_logo_products_left1">
            <ul className="special_items">
                {
                    menuList.map((item, index)=> 
                    (
                        <li key={index}>
                            <Link to={item.path}>{item.name}</Link>
                            <i>/</i>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
                <li><i className="fa fa-phone" aria-hidden="true"></i>(+0123) 234 567</li>
                <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:store@grocery.com">store@grocery.com</a></li>
            </ul>
        </div>
        <div className="clearfix"> </div>
    </div>
  )
}

export default HeaderMenu