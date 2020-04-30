import React from "react";
import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ imageUrl, title, linkUrl }) => {
  return (
    <div className="directory-item">
      <div className="directory-item-img">
        <img className="directory-item-img-img" src={imageUrl} alt={title} />
      </div>
      <Link to={linkUrl}>
        <div className="directory-item-detail">
          <div>{title.toUpperCase()}</div>
          <div>CLICK HERE</div>
        </div>
      </Link>
    </div>
  );
};

export default DirectoryItem;
