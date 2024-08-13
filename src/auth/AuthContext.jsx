import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, useToast } from '@chakra-ui/react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const toast = useToast()

  
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { data } = await axios.get('https://betweeder-production.up.railway.app/check-auth', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setUser(data);
        } catch (err) {
          console.error('Authentication check failed', err);
          localStorage.removeItem('token');
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };
  
    checkAuth();
  }, []);
 


  const login = async (data) =>{
    try{
      const res = await axios.post('https://betweeder-production.up.railway.app/login', data)
      setUser(res.data.user)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('uid', res.data.user.id)
      window.location.replace('/home')
    }catch(err){
       toast({
        position: 'bottom-right',
        render: () => (
          <Box color='white' p={3} bg='red.500'>
            {err.response?.data?.message || 'An unexpected error occurred'}
          </Box>
        ),
      })
    }
  }

  const logout = ()=>{
    localStorage.removeItem('token')
    setUser(null)
    navigate('/')

  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
