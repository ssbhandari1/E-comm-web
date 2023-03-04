import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Action';
import Carddata from './CardData';
import "./style.css"

function Cards() {
  const[data,setData]=useState(Carddata)
 const dispatch=useDispatch()
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Apna BhojNalay</h2>  
      <div className="row d-flex justify-content-center align-item-center">
        {
          data.map((item)=>{
            return(
              <Card style={{ width: '22rem',border:'none' }} className="mx-2 mt-4 card_style">
              <Card.Img variant="top" src={item.imgdata } style={{height:'16rem'}} className="mt-3"/>
              <Card.Body>
                <Card.Title> {item.rname}</Card.Title>
                <Card.Text>
                 price :(₹{item.price})
                </Card.Text>
                <div className="button_div d-flex justify-content-center">
                <Button variant="primary" className='col-lg-12' onClick={()=>dispatch(addToCart(item))}>Add to cart</Button>

                </div>
              </Card.Body>
            </Card>
            )
          })
        }
 
 
 


      </div>
    </div>
  )
}

export default Cards