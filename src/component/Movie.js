import React from 'react'
import record from '../env'
import {Col,Row} from 'react-bootstrap';
//import Link from 'antd/es/typography/Link';
import { Link } from 'react-router-dom';
export default function Movie(props){
  //console.log(props);
  var results=props['moviedata'];
  var{imgpath}=record;
  return (
    <Row>
    {
    results && results.map(val=>
    <Col xl={3} className='text-center'>
    <img src={imgpath+val.poster_path} className='img-fluid'/>
    <h4>{val.original_title}</h4>
    <p>{val.vote_average}</p>
    <p>{val.id}</p>
    <Link to={"/singlemovie/"+val.id}>Visit</Link>
    </Col>
  )
}
</Row>
  )
}