var currentSlot = 1;
var currentPick = 1;
var productNameList = ["Coca-Cola, Mexican Coke 12 oz. (355ml), Heck... Pack of 6","Crayola Ultraclean Broadline Classic Washable Marker, 10ct",
					   "Kleenex Ultra Soft & Strong Facial Tissues, Medium Count Flat, 170 ct, 6 Pack"];
var asileNumber = ['17', '3', '226'];
var binNumber = ['260', '178', '008'];
var quantity = [2,3,1];

$( "#Input1" ).focus();

function play_single_sound(i) {
	document.getElementById('audiotag'+i).play();
}

$( "#form" ).submit(function(e) {
	e.preventDefault();
  	var username = $("#Input1").val();
	if (username == "user"){
		$("#danger-alert").slideUp();
		$("#navbar").removeClass("navbar-danger");
		$("#form").removeClass("has-error");
		$("#login").hide();
		$("#login-photo").fadeIn().delay(3200).fadeOut();

		$( "#progress-bar" ).animate({
			width: "100%"
		}, 3000, function() {
			setTimeout(function(){
				$("#info-alert").slideDown();
				$("#navbar").addClass("navbar-info");
				$("#navbar").removeClass("navbar-warning");
				$("#navbar").addClass("navbar-default");
				
				$("#cart-setup").show();
				$("#main-progress").show();
				$( "#main-progress-bar" ).animate({
					width: "10%"
				}, 10, function() {
				    // Animation complete.
				});
				$("#pick-cart-scan").show();
				$("#app-title").text("Pick");
			}, 1000)
		    
			setTimeout(function(){
				$("#info-alert").slideUp();
			}, 3500);
			setTimeout(function(){
				$("#navbar").addClass("navbar-default");
				$("#navbar").removeClass("navbar-info");
			},4000);
		});
	}
	else {
		$("#danger-alert").slideDown();
		$("#navbar").addClass("navbar-danger");
		$("#form").addClass("has-error");
		play_single_sound('4'); 
	}
});

$("#menu-btn").click(function() {
	var boxWidth = $("#menu").width();
	if ( $("#menu").css('display') == 'none'){
		
    	$("#navbar").addClass("navbar-warning");
		$("#navbar").removeClass("navbar-default");
		$("#app-title").toggle();
		$("#app-menu").toggle();
		$("#navbar-right").toggle();
		$("#menuBackground").show();
    	
    	
		$("#menu").toggle();
		$("#menu-outbound").hide();
		$("#main-menu").show();
	}
	else if( $("#menu").css('display') != 'none' ){
		
		$("#menu").toggle();
		
		setTimeout(function(){
			$("#navbar").removeClass("navbar-warning");
			$("#navbar").addClass("navbar-default");
			$("#app-title").toggle();
			$("#app-menu").toggle();
			$("#navbar-right").toggle();
			
			$("#menuBackground").hide();
		}, 250);
	}
})

$('#signOut').click(function(){
	$("#menu").hide();
	$("#app-title").toggle().text("Sign out");
	$("#app-menu").toggle();
	$("#navbar-right").show();
	$("#navbar-right").html('<a href="bootstrap-elements.html" data-target="#" class="dropdown-toggle" data-toggle="dropdown"><i class="material-icons">cancel</i></a>');
	$("#left-col").removeClass("has-menu");
	$("#sign-out-confirm").show();
	$("#menuBackground").hide();
})

$("#yes-sign-out").click(function(){
	$("#app-title").text("AFT Lite");
	$("#navbar-right").html('<a href="javascript:void(0)" class="btn btn-raised btn-tertiary"><img src="img/Problem.svg"></a>');
	$("#login").show();
	$("#navbar").removeClass("navbar-warning");
	$("#navbar").addClass("navbar-default");
	$("#sign-out-confirm").hide();
	$( "#progress-bar" ).animate({
			width: "0%"
		}, 10, function() {
		    // Animation complete.
		});
})

$("#no-sign-out").click(function(){
	$("#app-title").text("AFT Lite");
	$("#navbar-right").html('<a href="javascript:void(0)" class="btn btn-raised btn-tertiary"><img src="img/Problem.svg"></a>');
	$("#menuArrowCol").show();
	$("#navbar").removeClass("navbar-warning");
	$("#navbar").addClass("navbar-default");
	$("#sign-out-confirm").hide();
})

$("#navbar-right").click(function(){
	if ( $("#sign-out-confirm").css('display') != 'none'){
		$("#app-title").text("AFT Lite");
		$("#navbar-right").html('<a href="javascript:void(0)" class="btn btn-raised btn-tertiary"><img src="img/Problem.svg"></a>');
		$("#menuArrowCol").show();
		$("#navbar").removeClass("navbar-warning");
		$("#navbar").addClass("navbar-default");
		$("#sign-out-confirm").hide();
	}
})

$("#outbound").click(function(){
	$("#main-menu").toggle();
	setTimeout(function(){
		$("#menu-outbound").toggle();
	},200);
});

$("#inventory").click(function(){
	$("#main-menu").toggle();
	setTimeout(function(){
		$("#menu-inventory").toggle();
	},200);
});

$("#alltasks").click(function(){
	$("#main-menu").toggle();
	setTimeout(function(){
		$("#menu-alltasks").toggle();
	},200);
});

$("#settings").click(function(){
	$("#main-menu").toggle();
	setTimeout(function(){
		$("#menu-settings").toggle();
	},200);
});

$("#menu-more-tasks").click(function(){
	$("#menu-outbound").toggle();
	
	setTimeout(function(){
		$("#main-menu").toggle();
	},200);
})

$("#settings-menu-back").click(function(){
	$("#menu-settings").toggle();
	
	setTimeout(function(){
		$("#main-menu").toggle();
	},200);
})

$("#inventory-menu-back").click(function(){
	$("#menu-inventory").toggle();
	
	setTimeout(function(){
		$("#main-menu").toggle();
	},200);
})

$("#alltasks-menu-back").click(function(){
	$("#menu-alltasks").toggle();
	
	setTimeout(function(){
		$("#main-menu").toggle();
	},200);
})

$("#settings-language").click(function(){
	$("#menu-settings").toggle();
	
	setTimeout(function(){
		$("#menu-languages").toggle();
	},200);
})

$("#languages-menu-back").click(function(){
	$("#menu-languages").toggle();
	
	setTimeout(function(){
		$("#menu-settings").toggle();
	},200);
})

$("#pick").click(function(){
	$("#menu").hide();
	$("#app-title").toggle().text("Pick");
	$("#app-menu").toggle();
	$("#navbar").removeClass("navbar-warning");
	$("#navbar").addClass("navbar-default");
	$("#navbar-right").show();
	$("#navbar-right").html('<a href="javascript:void(0)" class="btn btn-raised btn-tertiary"><img src="img/Problem.svg"></a>');
	$("#left-col").removeClass("has-menu");
	$("#menuBackground").hide();
	$("#cart-setup").show();
	$("#main-progress").show();
	$( "#main-progress-bar" ).animate({
		width: "10%"
	}, 10, function() {
	    // Animation complete.
	});
	$("#pick-cart-scan").show();
	$("#cart-setup-bottom").hide();
	$("#bottom-product").hide();
	$("#bin-scan").hide();
	$("#item-scan").hide();
})

$("#pick-cart-scan-barcode").click(function(){
	$("#pick-cart-scan").hide();
	$("#cart-setup-bottom").show();
	$('#bottom-bin').hide();
	$("#bottom-cart").show();
	$( "#main-progress-bar" ).animate({
		width: "100%"
	}, 100, function() {
	    $("#bottom-product").show();
		$("#bin-scan").show();
		
		$("#item-scan-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$("#item-scan-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+ productNameList[currentPick-1]);
		$( "#main-progress-bar" ).animate({
			width: "15%"
		}, 2700, function() {
			$( "#main-progress" ).show();
		});
	});
	$("#bin-bottom-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
	$("#bin-bottom-product-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+productNameList[currentPick-1]);
	$(".asile-number-digit").html(asileNumber[currentPick-1]);
	$(".bin-number-digit").html(binNumber[currentPick-1]);
	$("#quantity-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
	$("#quantity-product-name").html(productNameList[currentPick-1]);
	if(quantity[currentPick-1] == 1)
		$("#item-place-item").html(quantity[currentPick-1]+" item");
	else
		$("#item-place-item").html(quantity[currentPick-1]+" items");
	$("#number-item-dest-number").html(quantity[currentPick-1]);
	$("#alert-product-name").html(productNameList[currentPick-1]);
	$("#alert-product-quantity").html(quantity[currentPick-1]);
})

$("#bin-scan-qrcode").click(function(){
	$("#item-scan-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
	$("#item-scan-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+ productNameList[currentPick-1]);
	$("#bin-scan").hide();
	$("#item-scan").show();
	$("#bottom-cart").hide();
	$("#bottom-product").hide();
	$("#bottom-bin").show();
	$( "#main-progress-bar" ).animate({
		width: "33%"
	}, 100, function() {
	    // Animation complete.
	});
});

$("#item-scan-pic").click(function(){
	if(quantity[currentPick-1]!=1){
		$("#item-scan").hide();
		$("#item-quantity").show();
		$("#bottom-confirm-quantity").show();
		$("#bottom-bin").hide();
	}
	else{
		$("#item-scan").hide();
		$("#item-place-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$("#item-place").show();
		$("#bottom-product").show();
		$( "#main-progress-bar" ).animate({
			width: "66%"
		}, 100, function() {
		    // Animation complete.
		});
	}
	
});

$("#quantity-confirm-btn").click(function(){
	if(clickedquantity == quantity[currentPick-1]){
		$("#item-quantity").hide();
		$("#bottom-confirm-quantity").hide();
		$("#item-place-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$("#item-place").show();
		$('#bottom-product').show();
		$('#bottom-bin').show();
		$( "#main-progress-bar" ).animate({
			width: "66%"
		}, 100, function() {
		    // Animation complete.
		});
	}
	else {
		$(".quatityCheck").children().removeClass("clicked");
		$(".large-error-alert").show();
		$("#item-quantity").hide();
		$("#bottom-confirm-quantity").hide();
		$("#navbar").addClass("navbar-danger");
	}
	$(".quatityCheck").children().removeClass("clicked");
})

$("#reenterQuantity").click(function(){
	$(".large-error-alert").hide();
	$("#item-quantity").show();
	$("#bottom-confirm-quantity").show();
	$("#navbar").removeClass("navbar-danger");
})

$("#item-place").click(function(){
	if(currentPick != 3){
		$( "#main-progress-bar" ).animate({
			width: "100%"
		}, 100, function() {
		    // Animation complete.
		});
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
				width: "33%"
			}, 100, function() {
			    // Animation complete.
			});
		},2700)
		$("#success-alert").slideDown().delay(2000).slideUp();
		$("#bin-scan").show();
		$("#item-place").hide();
		$("#bottom-cart").show();
		$("#bottom-bin").hide();
		currentPick++;
		$("#bin-bottom-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$("#bin-bottom-product-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+productNameList[currentPick-1]);
		$(".asile-number-digit").html(asileNumber[currentPick-1]);
		$(".bin-number-digit").html(binNumber[currentPick-1]);
		$("#quantity-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$("#quantity-product-name").html(productNameList[currentPick-1]);
		if(quantity[currentPick-1] == 1)
			$("#item-place-item").html(quantity[currentPick-1]+" item");
		else
			$("#item-place-item").html(quantity[currentPick-1]+" items");
		$("#number-item-dest-number").html(quantity[currentPick-1]);
		$("#alert-product-name").html(productNameList[currentPick-1]);
		$("#alert-product-quantity").html(quantity[currentPick-1]);
	}
	else{
		$( "#main-progress-bar" ).animate({
			width: "100%"
		}, 100, function() {
		    // Animation complete.
		});
		$("#item-place").hide();
		$("#full-screen-success").show();
		$("#cart-setup-bottom").hide();
		$("#navbar").removeClass("navbar-default");
		$("#navbar").addClass("navbar-success");
		$( "#main-progress" ).hide();
		play_single_sound('1'); 
	}
	
})

$("#pick-complete-continue").click(function(){
	currentSlot = 1;
	currentPick = 1;
	$("#full-screen-success").hide();
	$("#main-progress").hide();
	$("#app-title").text("Vendor Flex");
	
	$("#navbar").removeClass("navbar-success");
	$("#navbar").addClass("navbar-warning");
	
	$("#app-title").toggle();
	$("#app-menu").toggle();
	$("#navbar-right").toggle();
	$("#menuBackground").show();
	
	$("#menu").toggle();
	$("#menu-outbound").hide();
	$("#main-menu").show();
	$("#main-progress").hide();
	$(".quatityCheck").children().removeClass("clicked");
})









