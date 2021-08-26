export default function Avatar(props) {
   
   let rounded = props.rounded ? props.rounded : 'rounded-md';
   let height = ! props.height ? '10' : props.height;

   return (
      <img src={props.img} className={`h-${height} ${rounded}`} alt='User Avatar'/>
   )
}