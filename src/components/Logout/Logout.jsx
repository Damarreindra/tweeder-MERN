import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userAction';
import { Button } from '@chakra-ui/react';

import { useAuth } from '../../auth/AuthContext';
const Logout = () => {
const {logout} = useAuth()
  const handleLogout = async () => {
    const success = logout()
    if (success) {
      console.log('Logout successful');
    } else {
      console.error('Logout failed');
    }
  };

  return (
    <Button variant={'ghost'} onClick={handleLogout}>Logout</Button>
  );
};

export default Logout;
