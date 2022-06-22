import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TheatersIcon from '@material-ui/icons/Theaters';
import SearchIcon from '@material-ui/icons/Search';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position:"fixed",
    bottom:0,
    backgroundColor:'#2d313a',
    zIndex:100,

  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate =useNavigate();

    useEffect(()=>{
        if(value===0) navigate("/");
        else if(value===1) navigate("/konser");
        else if(value===2) navigate("/tiyatro");
        else if(value===3) navigate("/search");

    }, [value, navigate]);


  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction  
       style={{color:"white"}}
       label="Popüler"
       icon={<WhatshotIcon />} 
       />
      <BottomNavigationAction
        style={{color:"white"}}
        label="Konser"
        icon={<FavoriteIcon />}
        />
      <BottomNavigationAction
       style={{color:"white"}}
       label="Tiyatro"
       icon={<TheatersIcon />} 
        />
       
       <BottomNavigationAction
       style={{color:"white"}}
       label="Ara"
       icon={<SearchIcon />} 
        />
      </BottomNavigation>
  );
}