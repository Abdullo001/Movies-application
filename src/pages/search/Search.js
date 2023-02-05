import { useParams } from "react-router-dom"

export const SearchPage=()=>{

  const {params}=useParams()

  return(
    <h1>Search page</h1>
  )
}