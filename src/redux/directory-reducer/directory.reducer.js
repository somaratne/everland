const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/dg9WqZj/hats.jpg",
      id: 1,
      linkUrl: "products/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/GVbnwcR/jackets.jpg",
      id: 2,
      linkUrl: "products/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/YjzJpnF/sneakers.jpg",
      id: 3,
      linkUrl: "products/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/NCtTFp0/womens.jpg",
      size: "large",
      id: 4,
      linkUrl: "products/womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/T4RVKRR/mens.jpg",
      size: "large",
      id: 5,
      linkUrl: "products/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
