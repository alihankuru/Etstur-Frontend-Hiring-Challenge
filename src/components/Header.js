import "./Header.css";

const Header = ()=>{
    return(
    
        <div className='App'>
             <span onClick={()=>window.scroll(0,0)} className='header'>Event App</span>;
        </div>
          
    );
}

export default Header;