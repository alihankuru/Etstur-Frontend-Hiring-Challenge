import { SecurityUpdateGood, WindowSharp } from '@mui/icons-material'

import React from 'react'
import Pagination from "@material-ui/lab/Pagination";

const CustomPagination = ({setPage, numOfPages=10}) => {
  
    const handlePageChange =(page)=>{
        SecurityUpdateGood(page);
        WindowSharp.scroll(0,0);
    };
  
  
  
    return (
        <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 420,
          marginBottom:10
        }}
      >
        
          <Pagination
            onChange={(e) => handlePageChange(e.target.textContent)}
            count={numOfPages}
            color="primary"
            hideNextButton
            hidePrevButton
          />
        
      </div>
  )
}

export default CustomPagination;