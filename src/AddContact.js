import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function (){
    const dispatch = useDispatch()
    const data = useSelector(state=>state) 
    const [nom,setNom] = useState("")
    const [adress,setAdress]= useState("")
    const [ville,setVille]=useState("")
    console.log(data)
    return (
        <>
            <h1>AJOUTER UN CONTACT</h1>
            Nom:<br></br>
            <input type="text" onChange={(e)=>setNom(e.target.value)} /><br></br>
            Email:<br></br>
            <input type="text" onChange={(e)=>setAdress(e.target.value)} /><br></br>
            Ville:<br></br>
            <input type='text' onChange={(e)=>setVille(e.target.value)} /><br></br>
            <button onClick={()=>dispatch({type:'add',nom:nom,adress:adress,ville:ville})} >Ajouter</button>
        </>

    )
}