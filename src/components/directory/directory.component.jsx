import React from "react";
import { connect } from "react-redux";
import DirectoryItem from "./../directory-item/directory-item.component";
import { selectDirectorySection } from "./../../redux/directory-reducer/directory.selectors";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory">
      <div className="row">
        {sections.map(({ imageUrl, title, id, linkUrl }, idx) =>
          idx <= 2 ? (
            <div className="col-1-3" key={id}>
              <DirectoryItem
                imageUrl={imageUrl}
                title={title}
                linkUrl={linkUrl}
              />
            </div>
          ) : null
        )}
      </div>
      <div className="row">
        {sections.map(({ imageUrl, title, id, linkUrl }, idx) =>
          idx > 2 ? (
            <div className="col-1-2" key={id}>
              <DirectoryItem
                imageUrl={imageUrl}
                title={title}
                linkUrl={linkUrl}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySection(state),
  };
};

export default connect(mapStateToProps)(Directory);
