
$(document).ready(function(){
	
	 $('#f').val(0);
 $('#s').val(0);
         $('#btn').click(function(){
			 
			 c=parseInt($('#f').val()) + parseInt($('#s').val());
			 $('#result').html('<b>Sum is:'+c+"</b>");
			 
		 }
		 
		 );	
	
});/*
$(document).ready(function(){
 $('#f').val(0);
 $('#s').val(0);
 $('#btn').click(function(){
	 c=parseInt($('#f').val())+parseInt($('#s').val());
	 $('#result').html('<b>Sum is:'+c+"</b>");
	 });

	});*/