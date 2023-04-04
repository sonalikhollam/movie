import React from 'react';
import record from '../env';
import useFetch from '../hooks/useFetch';
import {Container} from 'react-bootstrap';
import Movie from './Movie';
export default function Popular()
{
  var {path,key}=record;
  var finalPath = path +`3/movie/popular?api_key=${key}&language=en-Us&page=1`
  //console.log(finalPath);
  const ans=useFetch(finalPath);
  console.log(ans.results);
  return (
    <Container>
    <Movie moviedata={ans.results} />
    </Container>
  )
}
