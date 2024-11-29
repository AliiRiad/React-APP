import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export default function Details() {
    const {id} = useParams()
    const data = useSelector(state=>state)
    const datafil = data[parseInt(id)]
  return (
    <>
        #ID : {id}<br></br>
        NOM : {datafil.nom}<br></br>
        Adress : {datafil.adress}<br></br>
        Ville : {datafil.ville}<br></br>

        <button><Link to='/'>Retour</Link></button>
    </>
  )
}
