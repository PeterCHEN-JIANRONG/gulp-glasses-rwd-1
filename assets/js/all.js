"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!'); // DOM
  // 產品頁

  var optical = $(".banner__list").children()[0]; // nav選項

  var sunglasses = $(".banner__list").children()[1];
  var opticalList = $(".optical-block")[0]; // productList

  var sunGlassesList = $(".sunglasses-block")[0]; // 據點頁

  var locationList = document.querySelector(".location__list");
  var locationInformation = document.querySelector(".location__information "); // 事件
  // 產品頁

  $(".banner__list").click(function (e) {
    e.preventDefault(); // $(this).toggleClass("active");

    var option = e.target.dataset.category || e.target.parentNode.dataset.category;

    switch (option) {
      case 'optical':
        // optical.toggleClass("active");
        optical.classList.add('active');
        sunglasses.classList.remove('active');
        opticalList.classList.remove('d-none');
        sunGlassesList.classList.add('d-none');
        break;

      case 'sunglasses':
        sunglasses.classList.add('active');
        optical.classList.remove('active');
        sunGlassesList.classList.remove('d-none');
        opticalList.classList.add('d-none');
        break;

      default:
        break;
    }
  }); // 據點頁

  $(".location-button").click(function (e) {
    e.preventDefault(); // $(this).toggleClass("active");

    locationList.classList.add('d-none');
    locationInformation.classList.remove('d-none'); // console.log(locationInformation);
  });
});
//# sourceMappingURL=all.js.map
