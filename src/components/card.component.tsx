import * as React from "react";
type CardProps =  {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <div>
      {text}
    </div>
  )
}

export default Card;