import React , {useEffect,useLayoutEffect } from 'react';
import {useNavigate,Navigate} from 'react-router-dom';

function ProtectedLogin (props){
    let Cmp1 = props.Cmp1;

    const navigate = useNavigate();
    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem('user-info'));
      if (userInfo) {
        navigate('/');
      }
    }, []);
  
  
   return (
    <Cmp1/>
   )

}

export default ProtectedLogin