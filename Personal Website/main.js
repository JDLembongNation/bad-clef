const fadeInText = () =>{
    $("adjustToHeader").fadeIn("slow");
}

$(document).ready(() =>{
    console.log("Initializing Stuff");
    fadeInText();
    console.log("Initialization Completed!")
});