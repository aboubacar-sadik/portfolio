import React from 'react';

export default function Pricing(props) {
   return (
      <div className="pricing">
         <h3 className="price-title">{props.priceTitle}</h3>
         <p className="price  mono-font">
            {props.price}
            <span className="currency-symbol">€</span>
            <span className="price-unit">/{props.priceUnit}</span>
         </p>
      </div>
   );
}
