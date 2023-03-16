export default function About(props) {
   return (
      <div className={props.htmlClass}>
         <p>{props.aboutContent}</p>
      </div>
   );
}
