const imageGallery = {
  images: [],
  addImage: (imageUrl) => imageGallery.images.push(imageUrl),
  displayImages: () => imageGallery.images,
};

export default imageGallery;
