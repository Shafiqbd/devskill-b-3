import React from 'react'

const MegaSubMenu = ({subMenuList}) => {
  return (
    <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
        <div className="w3ls_vegetables">
            <ul>	
                {
                    subMenuList.map((item, sIndex)=> (
                        <li key={sIndex}><a href={item.path}>{item.name}</a></li>
                    ))
                }
            </ul>
        </div>                  
    </div>	
  )
}

export default MegaSubMenu