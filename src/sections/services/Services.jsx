export function Services(props) {
   return (
      <div className="service">
         <div className="service-image">
            <img src={props.img} alt="" />
         </div>
         <h3>{props.title}</h3>
         <p>{props.description}</p>
      </div>
   );
}

export function ServicesSlogans(props) {
   return <p className="services-slogan">{props.slogan}</p>;
}
