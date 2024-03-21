import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";
const Card=(props)=>{
    let course=props.course;
    let likedcourses=props.likedcourses;
    let setliked=props.setliked;

    function clickhandler(){
        if(likedcourses.includes(course.id)){
            setliked((prev)=>prev.filter((cid)=>(cid!==course.id))
            );
            toast.warning("removed")
            
        }
        else{
            if(likedcourses.length==0){
                  setliked(course.id)
                  
            }
            else{
                setliked((prev)=>[...prev,course.id])

            }
            toast.success("liked successfully")

        }
    }
    return(<div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
         <div className="relative">
           <img src={course.image.url}/>
           <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center"> 
            <button onClick={clickhandler}>

              {
                !likedcourses.includes(course.id) ? (<FcLikePlaceholder/>):(<FcLike/>)
              }
            </button>
         </div>
         </div>
       
         <div>
            <p>{course.title}</p>
            <p>{
  course.description.length>100?(course.description.substr(0,100)+"....."):(course.description)

}</p>
         </div>

      
    </div>)

}
export default Card;