import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import React from "react";
import s from "./Categories.module.css";
import image from "./chuck-norris.jpg";




const Categories = ()=> {
    
    const [jokeCategories , setJockeCategories] = useState([])
        useEffect(()=>{
            fetch(('https://api.chucknorris.io/jokes/categories'))
            .then(res=> res.json())
            .then(res=>{
                 setJockeCategories(res)
                })
            .catch(err=>console.log(err))
        },[]);
     
        
            const [item, setItem] = useState()
        
           const random = () =>{
                 fetch(('https://api.chucknorris.io/jokes/random'))
                 .then(res => res.json())
                 .then(res => { 
                     setItem(res.value)
                 })
                 .catch(err=> console.log(err))
             };
             useEffect(()=>{
                 random();
             },[])
        return (
    <>
    <div className={s.main}>
        <div>
            <h1 className={s.categories}>Categories</h1>
            </div>
       
        <div className={s.category}>
            {jokeCategories.map(category => <button  className={s.buttonItem} >{category}</button>)}

                 <button onClick={random} className={s.buttonItem}>random</button>
             
             <div className={s.wrapper}>
        <div className={s.quotation}>{item}</div> 
        <div><img className={s.chuckImage} src={image} alt="chucknorris"/></div> 
        </div> 
            </div>
        
        </div>
    </>
    )
}


export default Categories;
