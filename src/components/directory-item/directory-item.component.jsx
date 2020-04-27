import React from "react";
import "./directory-item.styles.scss";

const DirectoryItem = ({ imageUrl, title }) => {
  return (
    <div className="directory-item">
      <div className="directory-item-img">
        <img className="directory-item-img-img" src={imageUrl} alt={title} />
      </div>
      <div className="directory-item-detail">
        <div>{title.toUpperCase()}</div>
        <div>CLICK HERE</div>
      </div>
    </div>
  );
};

export default DirectoryItem;
