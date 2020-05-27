// SMOOTH SCROLLING
const smoothScrolling = () => {

  $("#main-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
};

//GET YEAR
function getUpdateYear() {
    $('#year').text( new Date().getFullYear())
};

smoothScrolling();
getUpdateYear();