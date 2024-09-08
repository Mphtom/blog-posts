/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"

export default function ProductRouts(props) {
  if(props.isLogin){
    return <Navigate to="/"/>
  }
  return (
    <div>{props.children}</div>
  )
  
}
