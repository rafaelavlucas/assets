// tabs
window.onload = function (e) {

    // Show and Hide Icons
    var btnColor = document.querySelectorAll(".btn"),
        icons = document.querySelectorAll(".icons"),
        input = document.querySelector('.copyUrl');

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

    }

    // Populate icon image

    var iconTotal = 243;

    function addIcons(color, iconNumber) {
        var icon = document.getElementById(color);
        for (let i = 1; i <= iconNumber; i++) {
            var template = `<i><img src="icons/${color}/icon-${i}.svg"></i>`;
            icon.insertAdjacentHTML('beforeend', template);
        }
    }

    // Run functions for each color
    addIcons("white", iconTotal)
    addIcons("black", iconTotal)
    addIcons("gray1", iconTotal)
    addIcons("gray2", iconTotal)


    // Select and copy source

    var icon = document.querySelectorAll('i img'),
        copied = document.querySelector('.copied');

    icon.forEach(function (element) {
        element.addEventListener('click', selectSrc);
    });


    function selectSrc(event) {
        var imgSrc = event.currentTarget.src;
        var target = event.currentTarget.parentElement;
        input.value = imgSrc;
        input.select();
        document.execCommand('copy');

        copied.classList.add('pop');
        target.classList.add('icon-active');

        setTimeout(function () {
            copied.classList.remove('pop');
        }, 1200);

        setTimeout(function () {
            target.classList.remove('icon-active');
        }, 1000);
    }
}