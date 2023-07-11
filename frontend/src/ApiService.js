import axios from 'axios';

import React from 'react'


// we fetch data from our django rest api using axios
export function getlocation() {
  return axios.get('http://127.0.0.1:8000/api/locations/')
  .then(res=>{
    return res.data
  })
}