import React from "react";
import "./PostImage.css";

const PostImage = ({ imageUrl }) => {
  return (
    <div className="postImg">
      <img src={imageUrl} alt="V.Kohli's Post" />
    </div>
  );
};

export default PostImage;
