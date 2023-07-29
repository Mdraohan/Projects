import React from 'react'
import'./Logout.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from './table/Table';

const Logout = () => {
  const user= useSelector(selectUser)
  const dispatch=useDispatch();
  const handleLogout=(e)=>{
    e.preventDefault();
    dispatch(logout());
  }

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className='Box_size'>
    <Box sx={{ width: '100%' }} >
      <Tabs
        value={value} 
        onChange={handleChange}
        aria-label="wrapped label tabs example"      
       >
        <Tab
          value="one"
          label="User Details"
          wrapped         
        />
        <Tab value="two" label="item one" />
        <Tab value="three" label="item two" />
        <Tab value="four" label="item three" />
        <Tab value="five" label="user" />
      </Tabs>
    </Box>
    </div>
    <div className='logout'>
    <h1 className='logout_wel'>Welcome <span className='user_name'>{user.name}</span></h1>
    <button className='logout_button' onClick={(e)=>handleLogout(e)}>
       Logout
    </button>
   </div>
   <br></br>
   <Table/>
   </>
  )
}

export default Logout