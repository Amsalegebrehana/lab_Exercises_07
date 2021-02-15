var carousel_indicators = document.querySelector(".carousel-indicators");
var carousel_inner = document.querySelector(".carousel-inner");

async function load_images() {
  //open the request
  let response = await fetch("https://picsum.photos/v2/list");

  let data = await response.json();

  return data;
}

(function loadDataNew() {
  load_images()
    .then(function (images) {
      //iterate over each post [30 posts]
      let outputimg = "";
      let slide = "";

      images.forEach(function (img, i) {
        slide += `<li data-bs-target="#MySlide" data-bs-slide-to="${(i +=
          "")}"></li>`;

        if (i == 0) {
          outputimg += `<div class="carousel-item active">
              <img class="d-block" src="${
                img.download_url
              }" width = ${1600} height=${700}>
              </div>`;
        } else {
          outputimg += `<div class="carousel-item ">
              <img class="d-block" src="${
                img.download_url
              }" width = ${1600} height=${700}>
              </div>`;
        }

        i += 1;
      });

      carousel_indicators.innerHTML = slide;
      carousel_inner.innerHTML = outputimg;
    })
    .catch(function (err) {
      console.log(err);
    });
})(); //self invoke the funtion
