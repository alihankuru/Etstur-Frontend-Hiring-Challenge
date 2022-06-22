import React,{useState} from 'react'
import SingleContent from "../../components/SingleContent/SingleContent";
import './Search.css';
import data from './records.json'
import {
  Button,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";

const Search= () =>{

  const [searchTerm,setSearchTerm]=useState("");
   
    return (
      
      <div>


     
          
            <div className='search'>
              <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchTerm(e.target.value)}
          />


            </div>

            <div className='trending'>
              {
                  data
                  .filter((val) => {
                    if(searchTerm==""){

                      return val;
                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){

                      return val;
                    }


                  })
                  .map((val)=>{
                    return(
                      
                      
                        <SingleContent
                        key={val.id}
                        name={val.name}
                        place={val.place}
                        image={val.image}
                        Time={val.Time}
                       />
                     
                       
                    )

                  })
              }
            </div>

          </div>
      
      
      
          
      );
    };

export default Search;