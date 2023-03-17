// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
// ---------Галерея изображений
// ---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--------
{
  /* <div class="gallery">
  <img src="images/1.jpg" alt="" class="gallery__main-image">
  <div class="gallery__thumbs">
    <img src="images/1.jpg" alt="" class="gallery__thumb">
    <img src="images/2.jpg" alt="" class="gallery__thumb">
    <img src="images/3.jpg" alt="" class="gallery__thumb">
  </div>
</div> */
}

const mainImage = document.querySelector(".gallery__main-image");
const thumbsWrapper = document.querySelector(".gallery__thumbs");

thumbsWrapper.addEventListener("click", (event) => {
  if (event.target.matches(".gallery__thumb")) {
    const newSrc = event.target.src;
    mainImage.setAttribute("src", newSrc);
  }
});
