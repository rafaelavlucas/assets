// tabs
window.onload = function (e) {


    // Populate icon image

    var imgTotal = 49;

    function addImages(imgNumber) {
        var image = document.getElementById("images");
        for (let i = 1; i <= imgNumber; i++) {

            var template = `<div class="image"><img src="images/img-${i}.jpeg"></div>`;
            image.insertAdjacentHTML('beforeend', template);
        }
    }

    addImages(imgTotal)


    // Select and copy source

    var img = document.querySelectorAll('img'),
        copied = document.querySelector('.copied'),
        input = document.querySelector('.copyUrl');

    img.forEach(function (element) {
        element.addEventListener('click', selectSrc);
    });


    function selectSrc(event) {
        var imgSrc = event.currentTarget.src;
        var target = event.currentTarget.parentElement;
        input.value = imgSrc;
        input.select();
        document.execCommand('copy');

        copied.classList.add('pop');
        target.classList.add('img-active');


        setTimeout(function () {
            copied.classList.remove('pop');
        }, 1200);

        setTimeout(function () {
            target.classList.remove('img-active');
        }, 1000);
    }
}