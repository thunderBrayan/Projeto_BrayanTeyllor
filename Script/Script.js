
/*Código para uso do JQuery*/

	$(document).ready(function(){
			  $("#flip").click(function(){
			    //$("#panel").slideDown("slow");

			    	$("#panel").slideDown("slow");
			  });
			

	
			  $("#flip2").click(function(){

			   		 $("#panel").slideUp("slow");
			  });

			  /*
					Animação que faz a mesma coisa dos outros dois anteriores
			  */

			  $("#flip3 ").click(function(){

			   	 	$("#panel").slideToggle("slow");

			  });

			  
			  $("#b1").click(function(){
			    $("#div1").fadeOut();
			    $("#div2").fadeOut("slow");
			    $("#div3").fadeOut(3000);
		  });

			  $("#b2").click(function(){
			    $("#div1").fadeIn();
			    $("#div2").fadeIn("slow");
			    $("#div3").fadeIn(3000);
		  });
	
		
		  $("#btn3").click(function(){
		    $("p").append(" <b>Appended text</b>.");
		  });

		  $("#btn4").click(function(){
		    $("ol").append("<li>Appended item</li>");
		  });


		  $("#btn5").click(function(){
		    $("b,li").remove();
		  });
		
		
	});
		



	



