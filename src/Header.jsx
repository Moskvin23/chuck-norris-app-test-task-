
import { useEffect, useState } from "react";
import s from './Header.module.css'
import Typography from '@material-ui/core/Typography'
import { AppBar, Toolbar } from "@material-ui/core";
import { IconButton } from "@mui/material";


const Header = ()=>{
    const [logo,setLogo] = useState()
    useEffect(()=>{
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res =>res.json())
        .then(res=>{
           
            setLogo(res.icon_url)
        })
        .catch(err=>console.log(err))
    },[])
    return (
    <>
    <div className={s.someHeader} >
    <AppBar style={{backgroundColor: '#422ED4' }} position="fixed" >
        <Toolbar className={s.toolbar}   display="flex">
        <Typography className={s.typography} > <img className={s.logo1} src={logo} />
        <h3 className={s.headerText}>Chuck Norris</h3></Typography>
        </Toolbar>
    </AppBar>
    </div>
         
        </>
    )
    }


export default Header;