export default function SectionTitle(props) {
   return (
      <div className="section-title-container">
         <span className="number mono-font">{props.number}</span>
         <h2 className="section-title">{props.title}</h2>
         <div className="line"></div>
      </div>
   );
}
