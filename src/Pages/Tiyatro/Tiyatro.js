import records from "./records.json"
import React from 'react';
import "./Tiyatro.css";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Tiyatro= () =>{

    
    const[recordsData,setRecordsState]=React.useState(records);
    return(
        <div>
            <span className="pageTitle">Tiyatrolar</span>
            <div className="trending">
          {recordsData && recordsData.posts.map(({image,name,email,id,adderss,place,Time,Content})=>(

            <SingleContent
             key={id} 
             name={name} 
             email= {email}
             image={image} 
             adderss={adderss}
             place={place}
             Time={Time}
             Content={Content} 
            
             
            />
           
            
          ))}
          
           </div>
           <CustomPagination/>
        </div>
        

    );

};

export default Tiyatro;