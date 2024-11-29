import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home() {
    const data = useSelector(state=>state)
    const dispatch =useDispatch()
    const [ville,setVille]=useState("")
  return (
    <>
        <h1>Liste des contacts</h1>
        <button><Link to="/AddContact" >ADD CONTACT +</Link></button>
        
        <h3>Filter</h3>
        <select onChange={(e)=>setVille(e.target.value)} >
            <option value="" >Votre Ville</option>
            <option value="agadir" >Agadir</option>
            <option value="tiznit" >Tiznit</option>
            <option value="casablanca" >Casablanca</option>
        </select>
        <button onClick={()=>dispatch({type:'filter',ville:ville})} >Filtrer</button>
        <button onClick={()=>dispatch({type:"initiale"})} >Initialiser</button>

        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>NOM</th>
                    <th>ADRESS</th>
                    <th>VILLE</th>
                    <th>HANDLE</th>
                </tr>
            </thead>
            <tbody>
                {data.map((elem,index)=>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{elem.nom}</td>
                        <td>{elem.adress}</td>
                        <td>{elem.ville}</td>
                        <td>
                            <button onClick={()=>dispatch({type:"remove",index:index})} >Supprimer</button>
                            <button><Link to={`/Details/${index}`} >Details</Link></button>
                            <button><Link to={`/Edit/${index}`} >Edit</Link></button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
  )
}
