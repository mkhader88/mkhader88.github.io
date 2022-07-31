$(document).ready(function () {
    let win = true;
    let game_start = false;

    $("#start").click(function () {
        $("#status").text("Game is Started");
        $(".boundary").removeClass("youlose");
        win = true;
        game_start = true;
    });

    $(".boundary").mouseover(function () {
        if(game_start){
            $("#status").text("You lose!");
            $(".boundary").addClass("youlose");
            win=false;
        }
    });


    $( "#maze" ).mouseleave(function() {
        if(game_start){
            $("#status").text("You lose!");
            $(".boundary").addClass("youlose");
            win=false;
        }
    });

    $("#end").mouseover(function () {
        if (win && game_start) {
            $("#status").text("You win! :]");
            game_start = false;
        }
    });


});
