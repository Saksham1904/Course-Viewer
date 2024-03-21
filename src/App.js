import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import {apiUrl,filterData} from './data';
import { toast } from 'react-toastify';
function App() {
  const[courses,setcourses]=useState(null);
  const[loading,setloading]=useState(true);
  const[category,setcategory]=useState(filterData[0].title);
  async function fetchData(){
    setloading(true);
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      
      setcourses(output.data);
    }
    catch(error){
    toast.error("NETWORK ERROR");
        }
        setloading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className="min-h-screen flex flex-col">
      <div>
      <Navbar/>
      </div>
      <div>
        <Filter category={category} setcategory={setcategory} filterData={filterData}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        
         { loading ? (<Spinner/>): (<Cards courses={courses} category={category}/>)}
        
      </div>

    </div>
  );
}

export default App;
