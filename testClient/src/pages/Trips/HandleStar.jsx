import React from "react";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function HandleStar({ stars, onStarClick }) {
  const [clickedStarIndex, setClickedStarIndex] = React.useState(null);

  const handleStarClick = (index) => {
    setClickedStarIndex(index);
    onStarClick(index + 1); // Call the onStarClick function with the rating (index + 1)
  };

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index} onClick={() => handleStarClick(index)}>
          {clickedStarIndex !== null && index <= clickedStarIndex ? (
            <AiOutlineStar style={{color:"blue"}}/>
          ) : (
            <AiOutlineStar />
          )}
        </span>
      ))}
    </div>
  );
}

export default HandleStar;
