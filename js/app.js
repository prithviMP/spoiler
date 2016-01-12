$(".spoiler span").hide();

$(".spoiler").append("<button>REveall spoiler!</button>");
$("button").click(function() {


	$(this).prev().show();
	$(this).remove();
});
