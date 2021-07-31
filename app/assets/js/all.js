console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
  // DOM
  // 產品頁
  const optical = $(".banner__list").children()[0]; // nav選項
  const sunglasses = $(".banner__list").children()[1];
  const opticalList = $(".optical-block")[0]; // productList
  const sunGlassesList = $(".sunglasses-block")[0];
  // 據點頁
  const locationList = document.querySelector(".location__list");
  const locationInformation = document.querySelector(".location__information ");

  // 事件
  // 產品頁
  $(".banner__list").click(function (e) {
    e.preventDefault();
    // $(this).toggleClass("active");
    const option = e.target.dataset.category || e.target.parentNode.dataset.category;

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
  });

  // 據點頁
  $(".location-button").click(function (e) {
    e.preventDefault();
    // $(this).toggleClass("active");
    locationList.classList.add('d-none');
    locationInformation.classList.remove('d-none');
  });

});