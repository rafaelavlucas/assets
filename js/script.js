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

        console.log(icons)

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

    addIcons("white", iconTotal)
    addIcons("black", iconTotal)

    var icon = document.querySelectorAll('i img'),
        copied = document.querySelector('.copied');

    icon.forEach(function (element) {
        element.addEventListener('click', selectSrc);
    });

    function selectSrc(event) {
        var imgSrc = event.currentTarget.src;
        input.value = imgSrc;
        input.select();
        document.execCommand('copy');

        copied.classList.add('pop');

        setTimeout(function () {
            copied.classList.remove('pop');
        }, 1000);
    }
}