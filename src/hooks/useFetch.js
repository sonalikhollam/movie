import React,{useState,useEffect} from 'react';
function useFetch(apiPath){
  //console.log(apiPath);
  const[record,setRecord]=useState([]);
  useEffect(()=>
  {
    fetch(apiPath)
    .then(res=>res.json())
    .then(val=>{
      //console.log(val.results);
      setRecord(val);
    })
  },[]);
  return record;
}
export default useFetch;