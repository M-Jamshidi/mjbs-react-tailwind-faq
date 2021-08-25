export default function Button(props) {

   let bgColor = props.bgColor ? props.bgColor : 'bg-white';
   let color = props.color ? props.color : 'text-white';
   let bColor = props.bColor ? props.bColor + ' border' : '';

   return (
      <>
         {
            props.type === 'border' ?
            <a className={`${color} ${bColor} rounded-md py-2 px-4 font-Shabnam text-sm flex ${bgColor} hover:bg-mainGreenColor hover:text-white duration-300 transition-colors`}
               href={props.href}>
                  {props.children}
            </a>
         :
            <a className={`${color} ${bColor} rounded-md py-2 px-4 font-Shabnam text-sm flex ${bgColor} hover:bg-green-700 duration-300 transition-colors`}
               href={props.href}>
                  {props.children}
            </a>
         }
      </>
   )
}