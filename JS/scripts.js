$(function(){
	var description_counter = 1
	$("#description_" + String(description_counter)).css("opacity", "1");
	window.setInterval(function(){
		description_counter = description_counter < 5 ? description_counter + 1 : 1;
		$(".description").not("#description_" + String(description_counter)).css("opacity", "0");
		$("#description_" + String(description_counter)).css("opacity", "1");
	}, 2000);
}); 