import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { BadgeProps } from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { CloseButton, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeCart } from '../redux/Action';


function Header() {

  //For total price
  const [price,setPrice]=useState(0)
  console.log("price",price)
  const dispatch=useDispatch()

const getData=useSelector(state=>state.Reducer.carts)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const total=()=>{
  let price=0;
  getData.map((item)=>{
    price=item.price*item.qnty+price
  })
  setPrice(price)


}
useEffect(()=>{
  total()
},[total])



  return (
    <Navbar bg="dark" variant="dark" style={{height:'12vh'}}>
    <Container>
      <NavLink to='/' className="text-decoration-none text-light mx-3">BhojNALAY</NavLink>
      <Nav className="me-auto">
        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>

        
     
      </Nav>
      <Badge badgeContent={getData.length} color="primary"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
    >
      
      <ShoppingCartIcon sx={{color:'rebeccapurple', fontSize:'3rem'}} />
    </Badge> 
      
    </Container>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {
          getData.length?
          <div className="card_details" style={{width:'24rem',padding:10}}>
<Table>
  <thead>
    <tr>
      <th>Photo</th>
      <th>Restorent Name</th>
    </tr>
  </thead>
  <tbody>
    {
      getData.map((ele)=>{
        return(
          <>
          <tr key={ele.id}>
            <td>
            <NavLink to={`/cart/${ele.id}`}   onClick={handleClose}>
              <img src={ele.imgdata} alt="" style={{width:'6rem',height:'6rem'}} /> 
              </NavLink>
            </td>
            <td>
              <p>{ele.rname}</p>
              <p>price :₹{ele.price}</p>
              <p>Quantity : {ele.qnty}</p>
            
            </td>
            <td className='mt-5'style={{color:'red', fontSize:25,cursor:'pointer'}} onClick={()=>dispatch(removeCart(ele.id))}>
            <DeleteForeverIcon />
            </td>
          </tr>
          </>
        )
      })
    }
    <p className='text-center'>Total :₹{price}</p>
  </tbody>
</Table>
          </div>
          :
          <div className='card_details d-flex justify-content-center align-items-center' style={{width:'20rem'
        }}>
          <CloseButton className='smallclose' style={{position:'absolute',top:3,right:15,fontSize:12,cursor:'pointer'
          }} onClick={handleClose}/>
          <p>Your carts is Empty</p>
          <img src="./images/cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}}/>
        </div>
        }
 
      </Menu>
  </Navbar>
  )
}

export default Header