const collectionInfo: {
  bannerCard: {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    heading: string;
    price:number;
    count: number;
    collectionImages: {
      id: number;
      imageUrl: string;
    }[];
  }[];
} = {
  bannerCard: [
    {
      id: 1,
      title: "Image 1",
      imageUrl: "/banner1.jpeg",
      description: "Description 1",
      heading: "Collection 1",
      count: 0,
      price: 19.99,
      collectionImages: [
        {
          id: 1,
          imageUrl: "./banner1.jpeg",
        },
        {
          id: 2,
          imageUrl: "./banner2.jpeg",
        },
        {
          id: 3,
          imageUrl: "./banner3.jpeg",
        },
        {
          id: 4,
          imageUrl: "./banner4.jpeg",
        },
      ],
    },

    {
      id: 2,
      title: "Image 2",
      imageUrl: "/banner1.jpeg",
      description: "Description 2",
      price: 89.99,
      count: 0,
      heading: "Collection 2",
      collectionImages: [
        {
          id: 1,
          imageUrl: "./banner2.jpeg",
        },
        {
          id: 2,
          imageUrl: "./banner3.jpeg",
        },
        {
          id: 3,
          imageUrl: "./banner4.jpeg",
        },
        {
          id: 4,
          imageUrl: "./banner5.jpeg",
        },
      ],
    },

    {
      id: 3,
      title: "Image 3",
      count: 0,
      imageUrl: "/banner1.jpeg",
      description: "Description 3",
      price: 69.99,
      heading: "Collection 3",
      collectionImages: [
        {
          id: 1,
          imageUrl: "./banner3.jpeg",
        },
        {
          id: 2,
          imageUrl: "./banner4.jpeg",
        },
        {
          id: 3,
          imageUrl: "./banner5.jpeg",
        },
        {
          id: 4,
          imageUrl: "./banner6.jpeg",
        },
      ],
    },

    {
      id: 4,
      title: "Image 4",
      count: 0,
          price: 49.99,
          imageUrl: "/banner1.jpeg",
      description: "Description 4",
      heading: "Collection 4",
      collectionImages: [
        {
          id: 1,
          imageUrl: "./banner1.jpeg",
        },
        {
          id: 2,
          imageUrl: "./banner2.jpeg",
        },
        {
          id: 3,
          imageUrl: "./banner3.jpeg",
        },
        {
          id: 4,
          imageUrl: "./banner4.jpeg",
        },
      ],
    },

    {
      id: 5,
      title: "Image 5",
      count: 0,
      imageUrl: "/banner1.jpeg",
          price: 39.99,
          description: "Description 5",
      heading: "Collection 5",
      collectionImages: [
        {
          id: 1,
          imageUrl: "./banner2.jpeg",
        },
        {
          id: 2,
          imageUrl: "./banner3.jpeg",
        },
        {
          id: 3,
          imageUrl: "./banner4.jpeg",
        },
        {
          id: 4,
          imageUrl: "./banner5.jpeg",
        },
      ],
    },

    {
      id: 6,
      title: "Image 6",
      count: 0,
      imageUrl: "/banner1.jpeg",
          price: 49.99,
          description: "Description 6",
      heading: "Collection 6",
      collectionImages: [
        {
          id: 1,
          imageUrl: "./banner3.jpeg",
        },
        {
          id: 2,
          imageUrl: "./banner4.jpeg",
        },
        {
          id: 3,
          imageUrl: "./banner5.jpeg",
        },
        {
          id: 4,
          imageUrl: "./banner6.jpeg",
        },
      ],
    },

    {
      id: 7,
      title: "Image 7",
      count: 0,
      imageUrl: "/banner1.jpeg",
          price: 19.99,
          description: "Description 7",
      heading: "Collection 7",
      collectionImages: [
        {
          id: 1,
          imageUrl: "./banner5.jpeg",
        },
        {
          id: 2,
          imageUrl: "./banner6.jpeg",
        },
        {
          id: 3,
          imageUrl: "./banner2.jpeg",
        },
        {
          id: 4,
          imageUrl: "./banner1.jpeg",
        },
      ],
    },
  ],
};

export default collectionInfo;
