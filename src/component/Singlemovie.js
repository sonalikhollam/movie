import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import record from '../env';
import useFetch from '../hooks/useFetch';
import './Style.css'

export default function Singlemovie() {
  let urldata=useParams();
  console.log(urldata);
  // {movieId:785084}
  // path:"/singlemovie/:movieId",
  // "https:localhost:3000/singlemovie/785084"
  let {movieId}=useParams();
  console.log(movieId);
  var ans_single = useFetch(`${record.path}3/movie/${movieId}?api_key=${record.key}&language=en-US`);
  console.log(ans_single);
  var ans_cast = useFetch(`${record.path}3/movie/${movieId}/credits?api_key=${record.key}&language=en-US`);
  console.log(ans_cast);
  const CAST=ans_cast['cast'];
  console.log(CAST);
  const GEN = ans_single.geners;

  return (
    <body className="body">
    <Container className='background'>
    <Row>
    <Col xl={6}>
<div className="moviebox d-flex">
<Col xl={4}>
<img src={record.imgpath +ans_single.backdrop_path} className='img-fluid' />

</Col>
<Col xl={8}>
<h2>{ans_single.original_title} </h2>
<h4>Rating : {ans_single.vote_average}</h4>
<p><span>{ans_single.runtime}</span>
{
  GEN && GEN.map( val=>
    <span>{val.name}</span>)
}
</p>
<p>{ans_single.release_date}</p>
</Col>
</div>
<h2>Overview</h2>
{ans_single.overview}
</Col>
<Col xl={6} className='text-center'>

<img src={record.imgpath +ans_single.poster_path} className='img-fluid' />
</Col>
    </Row>
    <Row>
    <h2>Cast</h2>
    {
      CAST && CAST.map(val=>
        <div class="col-xl-2 col-3">
        
        <img src={record.imgpath + val.profile_path} className='img-fluid' />
        <h5>{val.name}</h5>
        <p>Character Name: {val.character}</p>
        </div>
        )
    }
    </Row>
    </Container>
    </body>
  )
}
