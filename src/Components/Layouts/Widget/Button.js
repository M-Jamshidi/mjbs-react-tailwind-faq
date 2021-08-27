import { Link } from "react-router-dom";

export default function Button(props) {

   // background colors
   let bgColor = props.bgColor ? props.bgColor : ' bg-white';
   let bgHoverColor = props.bgHoverColor ? props.bgHoverColor : ' hover:bg-mainGreenColor';

   // text colors
   let color = props.color ? props.color : ' text-white';
   let hColor = props.hColor ? props.hColor : ' hover:text-white';

   // border colors
   let bColor = props.bColor ? props.bColor + ' border' : '';

   return (
      <>
            {
               props.link 
               ? <Link className={`${color} ${bColor} rounded-md py-2 px-4 font-Shabnam text-sm flex ${bgColor} ${hColor} ${bgHoverColor} duration-300 transition-colors flex items-center`}
                     to={props.link}>
                        {props.children}
                  </Link> 
               : <button 
                     onClick = {props.func ?? ''}
                     className={`${color} ${bColor} rounded-md py-2 px-4 font-Shabnam text-sm flex ${bgColor} ${hColor} ${bgHoverColor} duration-300 transition-colors flex items-center`}
                  > 
                     {props.children}
                  </button>
            }
      </>
   )
}