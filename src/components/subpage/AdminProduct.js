import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";


export default function AdminProduct(){
    const {id: productID} = useParams(); 
    const [data,setData] = useState({});
    const [vat, setVat] = useState([]);
    const path = "http://localhost:5555";    
    const fetchdata = async () => {
        const result = await axios.get(`${path}/product/${productID}`);
    
      };
    
    

//setData({...data,[name]: value})

<input type="text" name="name" defaultValue='asd' onChange={({target : {name,value}}) =>setData({...data,[name] : value})}></input>
    return(
        <>


        </>
    )
}