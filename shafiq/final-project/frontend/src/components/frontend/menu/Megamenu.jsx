import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategoryList, setSingleCategory } from '../../../redux/actions/categorys/categoryListAction';

const Megamenu = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const {categoryList} = useSelector(state=> state.categoryStore);

    useEffect(()=> { 
        dispatch(setCategoryList());
    }, []);

    // const handelProductPage = (data) => {
    //     navigate(`/${data._id}`);
    //     dispatch(setSingleCategory(data));
        
    // }


  return (
    <div className="w3l_banner_nav_left">
        <div className='megamenu_container'>
            <nav className="navbar nav_bottom">
                <div className="navbar-header nav_2">
                    <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                </div> 
                <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                    <ul className="nav navbar-nav nav_1">
                        {
                            categoryList.map((item, index) => 
                            (
                                <li key={index}>
                                    <Link to={`/${item._id}`} onClick={() => dispatch(setSingleCategory(item))} className={(navInfo) => navInfo.isActive ? 'active' : "active"}>{item.name}</Link>                                    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    
  )
}

export default Megamenu