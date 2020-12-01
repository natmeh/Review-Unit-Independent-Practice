let numThings=1;
$(".to-pack-button").click(function(){
    let packThis= $(".to-pack-input").val();
$(".packing-list").append("<li>"+ packThis+ "</li>");
    numThings = numThings + 1;
   $(".num-to-pack").text(numThings);
});

$(".courses-button").click(function(){
	let classes= $(".courses-input").val();
    $(".course-list").append("<ol>" +classes +"</ol>");

});
