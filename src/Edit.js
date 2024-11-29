import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Edit() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [nom,setNom]= useState("")
    const [adress,setAdress]=useState("")
    const [ville,setVille]=useState("")
    const data = useSelector(state=>state)
    console.log(data)
  return (
    <>
        Nom:<br></br>
        <input type="text" onChange={(e)=>setNom(e.target.value)}  value={nom} /><br></br>
        Adress:<br></br>
        <input type="text" onChange={(e)=>setAdress(e.target.value)} value={adress} /><br></br>
        Ville:<br></br>
        <input type='text' onChange={(e)=>setVille(e.target.value)} value={ville} /><br></br>
        <button onClick={()=>dispatch({type:'editer',id:parseInt(id),newNom:nom,newAdress:adress,newVille:ville})} >Editer</button>
    </>
  )
}
