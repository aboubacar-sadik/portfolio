export default function Social(props) {
   return (
      <a href={props.socialLink} className="social">
         <div className="social-image">
            <img src={props.img} alt="" />
         </div>
         <span className="social-name">{props.name}</span>
      </a>
   );
}
