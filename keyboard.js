var clickedquantity = 0;

$(".quatityCheckBtn").click(function(){
	$(".quatityCheck").children().removeClass("clicked");
	$(this).addClass("clicked")
});

$("#quantity1").click(function(){
	clickedquantity = 1;
	quantitycheck();
});

$("#quantity2").click(function(){
	clickedquantity = 2;
	quantitycheck();
});

$("#quantity3").click(function(){
	clickedquantity = 3;
	quantitycheck();
});

$("#quantity4").click(function(){
	clickedquantity = 4;
	quantitycheck();
});

$("#quantity5").click(function(){
	clickedquantity = 5;
	quantitycheck();
});

$("#quantity6").click(function(){
	clickedquantity = 6;
	quantitycheck();
});

$("#quantity7").click(function(){
	clickedquantity = 7;
	quantitycheck();
});

$("#quantity8").click(function(){
	clickedquantity = 8;
	quantitycheck();
});

$("#quantity9").click(function(){
	clickedquantity = 9;
	quantitycheck();
});

function quantitycheck(){
	if(clickedquantity == quantity[currentPick-1]){
		if(currentPick != 3){
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});
			$("#login-photo").show().delay(300).hide();
			$("#item-quantity").hide();
			$("#bottom-confirm-quantity").hide();
			setTimeout(function(){
				$("#bin-scan").show();
				if(quantity[currentPick-1] == 1)
					$("#alert-success-message").text(" "+quantity[currentPick-1]+" item picked");
				else
					$("#alert-success-message").text(" "+quantity[currentPick-1]+" items picked");
				play_single_sound('1'); 
				$("#navbar").removeClass("navbar-default");
				$("#navbar").addClass("navbar-success");
				setTimeout(function(){
					$("#navbar").addClass("navbar-default");
					$("#navbar").removeClass("navbar-success");
					$( "#main-progress-bar" ).animate({
						width: "20%"
					}, 100, function() {
					    // Animation complete.
					});

				},2700);
				

				$("#success-alert").slideDown().delay(2000).slideUp();

				
				$("#item-place").hide();
				$("#bottom-product").show();
				$("#bottom-cart").show();
				$("#bottom-bin").hide();
				

				$( "#bin-number-scan-input" ).val("");
				$( "#bin-number-scan-input" ).focus();

				currentPick++;
				$("#bin-bottom-product-pic").attr("src"," https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
				$("#bin-bottom-product-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+productNameList[currentPick-1]);
				$("#quantity-product-pic").attr("src"," https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
				$("#quantity-product-name").html(productNameList[currentPick-1]);
				$(".asile-number-digit").html(asileNumber[currentPick-1]);
				$(".bin-number-digit").html(binNumber[currentPick-1]);
				if(quantity[currentPick-1] == 1)
					$("#item-place-item").html(quantity[currentPick-1]+" item");
				else
					$("#item-place-item").html(quantity[currentPick-1]+" items");
				$(".number-item-dest-number").html(quantity[currentPick-1]);
				$("#alert-product-name").html(productNameList[currentPick-1]);
				$("#alert-product-quantity").html(quantity[currentPick-1]);
			},300);
			

			
		}
		else{
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});
			
			$("#item-quantity").hide();
			$("#bottom-confirm-quantity").hide();
			$("#full-screen-success").show();
			$("#navbar").removeClass("navbar-default");
			$("#navbar").addClass("navbar-success");
			$( "#main-progress" ).hide();
			play_single_sound('1'); 
		}
	}
	else{
		$(".quatityCheck").children().removeClass("clicked");
		$(".large-error-alert").show();
		$("#item-quantity").hide();
		$("#bottom-confirm-quantity").hide();
		$("#navbar").addClass("navbar-danger");
	}
}

$("#slam1").click(function(){
	var quantity_input = $("#slam-item-quantity").val()+"1";
	$("#slam-item-quantity").val(quantity_input);
	$("#slam-item-quantity").focus();
});

$("#slam2").click(function(){
	var quantity_input = $("#slam-item-quantity").val()+"2";
	$("#slam-item-quantity").val(quantity_input);
	$("#slam-item-quantity").focus();
});

$("#slam3").click(function(){
	var quantity_input = $("#slam-item-quantity").val()+"3";
	$("#slam-item-quantity").val(quantity_input);
	$("#slam-item-quantity").focus();
});

$("#slam4").click(function(){
	var quantity_input = $("#slam-item-quantity").val()+"4";
	$("#slam-item-quantity").val(quantity_input);
	$("#slam-item-quantity").focus();
});

$("#slam5").click(function(){
	var quantity_input = $("#slam-item-quantity").val()+"5";
	$("#slam-item-quantity").val(quantity_input);
	$("#slam-item-quantity").focus();
});

$("#slam6").click(function(){
	var quantity_input = $("#slam-item-quantity").val()+"6";
	$("#slam-item-quantity").val(quantity_input);
	$("#slam-item-quantity").focus();
});

$("#slam7").click(function(){
	var quantity_input = $("#slam-item-quantity").val()+"7";
	$("#slam-item-quantity").val(quantity_input);
	$("#slam-item-quantity").focus();
});

$("#slam8").click(function(){
	var quantity_input = $("#slam-item-quantity").val()+"8";
	$("#slam-item-quantity").val(quantity_input);
	$("#slam-item-quantity").focus();
});

$("#slam9").click(function(){
	var quantity_input = $("#slam-item-quantity").val()+"9";
	$("#slam-item-quantity").val(quantity_input);
	$("#slam-item-quantity").focus();
});

$("#slam0").click(function(){
	var quantity_input = $("#slam-item-quantity").val()+"0";
	$("#slam-item-quantity").val(quantity_input);
	$("#slam-item-quantity").focus();
});

$("#slamd").click(function(){
	var quantity_input = $("#slam-item-quantity").val();
	if(quantity_input.length > 1)
		$("#slam-item-quantity").val(quantity_input.substr(0,quantity_input.length-1));
	else
		$("#slam-item-quantity").val("");
	$("#slam-item-quantity").focus();
});

