import React,{ useContext,useEffect,useState} from 'react'
import record from '../env';
import Context from './Contextdata';
import Movie from './Movie';

export default function Searchcomp() {
  const record_search = useContext(Context);
  console.log(record_search);
  const[apival,setApiVal] = useState([]);
  useEffect(()=>{
   // console.log('use Effect called',record);
   const apipath = `${record.path}3/search/movie?api_key=${record.key}&language=en-US&query=${record_search}&page=1`;
   fetch(apipath)
   .then(res=>res.json())
   .then(val=>{
    console.log(val);
    setApiVal(val.results);
   })

  },[record_search]);
  return (
    <div class='container'>
    <h1>Searchcomp</h1>
    <Movie moviedata={apival}/>
    </div>
  )
}
