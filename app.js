var counter = 0;
$(document).ready(function(){

	$("#container").on('click', '.generate', function(){
		counter++;
		$("#container").append('<div class ="buttonContainer"></div>');
		var $el = $('#container').children().last();
		$el.append("<button class ='deleteButton'>Delete</button>");
		$el.append("<button class ='changeButton'>Change</button>");
		$el.append("<p>"+counter+"</p>");
	});

	$("#container").on('click', '.deleteButton', function(){
		
		$(this).parent().remove();
	});

	$("#container").on('click', '.changeButton', function(){
		$(this).parent().toggleClass('selected');
		//$(this).parent().css("background-color", "red");
		
	});
});