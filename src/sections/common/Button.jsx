export default function Button(props) {
   return (
      <div className="resume">
         <button className={props.class}>{props.buttonText}</button>
      </div>
   );
}
