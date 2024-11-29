const initiale = []
export default function Reducer(state=initiale,action) {
  switch(action.type){
    case 'add':
        return [...state,{nom:action.nom,adress:action.adress,ville:action.ville}]
    case 'remove':
      return state.filter((_,i)=>i !== action.index)
    case 'editer':
      return state.map((item,index) => index === action.id 
            ? {...item,nom:action.newNom,adress:action.newAdress,ville:action.newVille} 
            : item
          )
    case 'filter':
      return [...state.filter(elem=>elem.ville === action.ville)]
    case 'initiale':
      return initiale
    default:
      return state
  }
}
