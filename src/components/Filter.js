import React from "react";


const Filter=(props)=>{
  let  filterData=props.filterData;
  let category=props.category;
  let setcategory=props.setcategory;
  function filterhandler(title){
    setcategory(title)

  }
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-ceter">
            {
                filterData.map((data)=>{
                return <button key={data.id} onClick={()=>filterhandler(data.title)}>{data.title}</button>
                })
            }
        </div>

    )
}
export default Filter
