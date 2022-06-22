import records from "./records.json"
import React from 'react';
import "./Konser.css";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Konser= () =>{

    
    const[recordsData,setRecordsState]=React.useState(records);
    return(
        <div>
            <span className="pageTitle">Konserler</span>
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

export default Konser;