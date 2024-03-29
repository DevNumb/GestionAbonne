import React , {useEffect,useLayoutEffect } from 'react';
import {useNavigate,Navigate} from 'react-router-dom';

function Protected (props){
    let Cmp = props.Cmp;

    const navigate = useNavigate();
    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem('user-info'));
      if (!userInfo) {
        navigate('/Register');
      }
    }, []);
  
  
   return (
    <Cmp/>
   )

}

export default Protected