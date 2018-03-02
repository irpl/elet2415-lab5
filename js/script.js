//$("#led").is(":checked");


$( document ).ready(function() {

    update();
    
});

function update() {
    $.get("php/browser.php",{x:""},function (response) {
        
        response = JSON.parse(response);
        
        console.log(response);
        
        switch(response["shape"]) {
            case "1":
                square(response["colour"]);
                break;
            case "2":
                circle(response["colour"]);
                break;
            case "3":
                triangle(response["colour"]);
                break;
            case "4":
                pentagon(response["colour"]);
                break;
            default:
                break;
        }
    });
}

function square(col) {
    $("#shape").removeClass();
    $("#shape").css("background-color", "#"+col);
}

function circle(col) {
    $("#shape").removeClass();
    $("#shape").addClass("circle");
    $("#shape").css("background-color", "#"+col);
}

function triangle(col) {
    $("#shape").removeClass();
    $("#shape").addClass("triangle");
    $("#shape").css("border-color", "transparent transparent #"+col+" transparent");
}

function pentagon(col) {
    $("#shape").removeClass();
    $("#shape").addClass("pacman");
    // $("#shape").css("border-color", "#"+col+" transparent");
    $("#shape").css("border-color", "#"+ col + " transparent" +" #" +col + " #" + col);
    
}