$(document).ready(() => {
    const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
    let growthAmount;

    $("#start").on("click", function (evt) {
        evt.preventDefault();

        const numberCircles = parseInt($("#number-circles").val());

        const size = $("#width").val();
        growthAmount = parseInt($("#growth-amount").val());
       let growRate = parseInt($("#grow-rate").val());
        for (let i = 0; i < numberCircles; i++) {
            let $circle = $("<div>", {
                class: "circle",
                css: {
                    borderRadius:"100%",
                    "position": "absolute",
                    width: size,
                    height: size,
                    top: getRandom(0, 300 - 200)+'px',
                    right: getRandom(0, 300 - 200)+'px',
                    "background-color": random_rgba(),
                },
            });
            let circleInterval = setInterval(growCircle, growRate, $circle);

            $circle.on("click", function () {
                $(this).remove();
                clearInterval(circleInterval);
            });

            $("#circles").append($circle);
        }
    });

    function growCircle($circle) {
        const size = parseInt($circle.css("width")) + growthAmount + "px";

        $(".circle").css({
            width: size,
            height: size,
        });
    }

    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }

    //Auto start first time with init values
     $("#start").click();


});