import React from "react";

export const CaptionImage = (props) => {
  return (
    <div>
      <img src={props.imgUrl} alt={props.caption} />
      <p>{props.caption}</p>
    </div>
  );
};

// export const CaptionImage = ({ imgUrl, caption }) => {
//   return (
//     <div>
//       <img src={imgUrl} alt={caption} />
//       <p>{caption}</p>
//     </div>
//   );
// };
