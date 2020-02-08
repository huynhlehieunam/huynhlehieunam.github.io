var showQuestion = function(){
    $(".game").fadeIn(1000)
}

$("#no").hover(function(e){
    let maxX = screen.availWidth;
    let maxY = screen.availHeight;
   $("#no").offset({top:Math.random()*(maxY+1),left:Math.random()*(maxX+1)})
})

$("#no").click(function(e){
    let maxX = screen.availWidth;
    let maxY = screen.availHeight;
   $("#no").offset({top:getRandomInt(maxY),left:getRandomInt(maxX)})
})

$("#yes").click(function(e){
    $(".game").css("display","none")
    $(".popup").css("display","block")
})

$(document).ready(function () {
    $(".game").css("display","none");
    $(".popup").css("display","none");
    setTimeout(showQuestion,1000);
});