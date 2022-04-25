import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from '../../../components/admin/users/UserForm';
import { HeaderContent, HeaderWrap } from '../../../components/common/common-css';
import { addUserInfo, getUserByUserId, updateUserInfo } from '../../../redux/actions/users/userActions';

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{id} = useParams();
  const { userData } = useSelector((state) => state.userStore);

  useEffect(() => {
    if (id) {
      dispatch(getUserByUserId(id));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      dispatch(await addUserInfo(userData));
    }else{
      dispatch(await updateUserInfo(userData, id));
      navigate("/admin/user-list");
    }
    
  };

  return (
    <>
      <HeaderWrap>
        <HeaderContent>
          <h3>User</h3>
        </HeaderContent>      
      </HeaderWrap>
      <UserForm userModel={userData} handleSubmit={handleSubmit} />
    </>
  )
}

export default User