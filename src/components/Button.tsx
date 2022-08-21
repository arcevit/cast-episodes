import React from 'react'
import { TBtn } from '../util/types';

interface Prop{
	title:string;
	onClick?:()=>void;
	color?:TBtn;
	props?:any
}


const Button:React.FunctionComponent<Prop> = ({title,onClick, color='secondary',...props}) => {
	
  return (
	<button  {...{onClick,...props}} className={`btn btn-${color}`} >{title}</button>
  )
}

export default Button