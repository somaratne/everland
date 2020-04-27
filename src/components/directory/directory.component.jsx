import React from "react";
import DirectoryItem from "./../directory-item/directory-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/dg9WqZj/hats.jpg",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/GVbnwcR/jackets.jpg",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/YjzJpnF/sneakers.jpg",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/NCtTFp0/womens.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/T4RVKRR/mens.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory">
        <div className="row">
          {sections.map(({ imageUrl, title, id }, idx) =>
            idx <= 2 ? (
              <div className="col-1-3" key={id}>
                <DirectoryItem imageUrl={imageUrl} title={title} />
              </div>
            ) : null
          )}
        </div>
        <div className="row">
          {sections.map(({ imageUrl, title, id }, idx) =>
            idx > 2 ? (
              <div className="col-1-2" key={id}>
                <DirectoryItem imageUrl={imageUrl} title={title} />
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default Directory;
