import imagesGallery from '../modules/imagesGallery/index.js';

const addImage = () => {
  const imageUrl = document.getElementById("imageUrl").value;
  imagesGallery.addImage(imageUrl);
  displayImages();
  document.getElementById("imageUrl").value = "";
}

const displayImages = () => {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  imagesGallery.displayImages().forEach((imageUrl) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    gallery.appendChild(imgElement);
  });
}

displayImages();

document.getElementById('addImageBtn').addEventListener('click', addImage);

export default { addImage, displayImages };
