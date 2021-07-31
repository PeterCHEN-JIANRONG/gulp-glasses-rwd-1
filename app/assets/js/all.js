console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
  // DOM
  // nav選項
  const optical = $(".banner__list").children()[0];
  const sunglasses = $(".banner__list").children()[1];
  // productList
  const opticalList = $(".optical-block")[0];
  const sunGlassesList = $(".sunglasses-block")[0];

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

});