import React, { useState } from "react";
import Card from './Card';
const Cards=(props)=>{
    let courses=props.courses;
    let category=props.category;
    const[likedcourses,setliked]=useState([]);
    function getcourses(){
        if(category=="ALL"){
        let allcourses=[];
    Object.values(courses).forEach(array=>{
        array.forEach(coursedata=>{
            allcourses.push(coursedata);
        })
    })
    return allcourses;
}
else{
      return courses[category];

}
    }
   return(
    <div className="flex flex-wrap justify-center gap-4 mb-4" >
        {
            getcourses().map((course)=>{
               return <Card key={course.id} course={course} likedcourses={likedcourses} setliked={setliked}/>
            })
        }
    </div>
   )

    
}
export default Cards;