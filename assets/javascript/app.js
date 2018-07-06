// function to get from the landing page to portfolio
var welcomeButton = $('#welcome').on('click', function () {
    console.log("welcomeButton");
    $(this).parent().hide();
    $('.container').show();
    mainPage();
});

// function for displaying the results page
var mainPage = function () {
    window.location = "../portfolio/about.html";

}

