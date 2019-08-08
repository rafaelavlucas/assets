// tabs
window.onload = function (e) {


    var btnColor = document.querySelectorAll(".btn"),
        icons = document.querySelectorAll(".icons");


    btnColor.forEach(function (el) {
        el.addEventListener("click", showColor);
    });


    function showColor(el) {
        var currentColor = el.currentTarget,
            cenas = currentColor.dataset.color;

        icons.forEach(function (el) {
            el.classList.remove('active');
        });

        btnColor.forEach(function (el) {
            el.classList.remove("clicked");
        });


        document.querySelector("#" + cenas).classList.add('active');

        currentColor.classList.add("clicked");

        console.log(icons)

    }

}