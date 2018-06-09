$(document).ready(function(){
	$(document).on('click', 'a[href^="#"]', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
	});
	$('#numero').hide();
	$('#numero').removeClass("whatsappon");
	$("#whatsapp").click(function(){
		$('#numero').show();
		$('#numero').toggleClass("whatsappon");
	});
});