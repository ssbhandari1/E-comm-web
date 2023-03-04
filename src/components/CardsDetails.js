import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Table } from 'react-bootstrap'
import { fontSize } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, dicCart, removeCart } from '../redux/Action';

export const CardsDetails = () => {
  const history=useNavigate()

  const dispatch=useDispatch()
  const [data,setData]=useState([]);
 
  const getData=useSelector(state=>state.Reducer.carts)
  const {id}=useParams()
  const getCompare=()=>{
    let comparedata=getData.filter((item)=>{
      return item.id==id
    })
    console.log("comp",comparedata)
     setData(comparedata)
  }

  useEffect(()=>{
    getCompare()
  },[id])

  const dltPage=(id)=>{
    dispatch(removeCart(id));
    history("/")
  }

  //Increase Quantity


  return (
   <>
    <div className='container mt-2'>
      <h2 className='text-center'>Items Details Page</h2>

<section className='container mt-3'>
  <div className="iteamsdetails">
    {
      data.map((item)=>{
        return(
<>
<div className="items_img" >
      <img src={item.imgdata} alt="" />
</div>

    <div className="details">
      <Table>
        <tr>
          <td>
            <p><strong>Restaurant</strong> :{item.rname}</p>
            <p><strong>Price</strong> :₹{item.price}</p>
            <p><strong>Dishes</strong> :{item.address}</p>
            <p><strong>Total</strong> :₹{item.price*item.qnty}</p>
            <div className='mt-3 d-flex justify-content-between align-item-center' style={{width:100,cursor:'pointer',background:'#ddd',color:"111"}}>
<span style={{fontSize:24 }} onClick={item.qnty<=1?()=>dltPage(item.id):()=>dispatch(dicCart(item))}>-</span>
<span style={{fontSize:22}}>{item.qnty}</span>
<span style={{fontSize:24}} onClick={()=>dispatch(addToCart(item))}>+</span>
            </div>
          </td>
           
          <td>
            <p><strong>Rating :</strong> <span style={{background:'green',color:'#fff',padding:'2px 5px',borderRadius:'5px'}}>{item.rating} ★</span></p>  
            <p><strong>Order Review :</strong > <span >{item.somedata}</span></p>
            <p><strong>Remove :</strong> <span >  <DeleteForeverIcon style={{color:'red', fontSize:25,cursor:'pointer'}} onClick={()=>dltPage(item.id)} /></span></p>
            </td>  

        </tr>
      </Table>
    </div></>
        )
      })
    }
    
  </div>

</section>
        
    </div>
    </>
  )
}
