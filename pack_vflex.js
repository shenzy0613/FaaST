var currentSlot = 1;
var currentPick = 2;
var productNameList = ["Coca-Cola, Mexican Coke 12 oz. (355ml), Heck... Pack of 6","Crayola Ultraclean Broadline Classic Washable Marker, 10ct",
					   "Kleenex Ultra Soft & Strong Facial Tissues, Medium Count Flat, 170 ct, 6 Pack"];
var asileNumber = ['17', '3', '226'];
var binNumber = ['260', '178', '008'];
var destBag = ['2','3','1'];

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
		$("#main-progress").hide();
	}
	else if( $("#menu").css('display') != 'none' ){
		
		$("#menu").toggle();
		
		
			$("#navbar").removeClass("navbar-warning");
			$("#navbar").addClass("navbar-default");
			$("#app-title").toggle();
			$("#app-menu").toggle();
			$("#navbar-right").toggle();
			
			$("#menuBackground").hide();
			$("#main-progress").hide();
			
		
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

$("#pack").click(function(){
	$("#menu").hide();
	$("#app-title").toggle().text("Pack");
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
	$("#printer-scan").hide();

	$("#screen-bottom").hide();
	$("#bottom-product").hide();
	$("#item-scan").hide();
})

$("#pick-cart-scan-barcode").click(function(){
	$("#printer-scan").show();
	$("#pick-cart-scan").hide();
	
	$( "#main-progress-bar" ).animate({
		width: "50%"
	}, 100, function() {
	    // Animation complete.
	});
})

$("#printer-scan-barcode").click(function(){
	$("#item-scan").show();
	$("#printer-scan").hide();
	$(".product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
	$(".product-name").html("<strong>1 x</strong> "+productNameList[currentPick-1]);
	$("#bottom-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
	$("#bottom-product-name").html("<strong>1 x</strong> "+productNameList[currentPick-1]);
	$("#screen-bottom").show();
	$("#bottom-product").hide();
	$("#item-put-product").show();
	$( "#main-progress-bar" ).animate({
		width: "100%"
	}, 100, function() {
	    
	});

	setTimeout(function(){
		$( "#main-progress-bar" ).animate({
			width: "25%"
		}, 100,function(){

		});
	},500);
})

$("#item-scan-pic").click(function(){
	
	$("#item-scan").hide();
	
	$("#item-put").show();
	$("#item-put-continue").show();
	
	
	$( "#main-progress-bar" ).animate({
		width: "50%"
	}, 100, function() {
	    // Animation complete.
	});
});

$("#item-put-continue").click(function(){
	$("#item-put-continue").hide();
	$("#item-put").hide();
	$("#tracking-id-scan").show();
	$("#screen-bottom").show();
	$("#bottom-product").show();
	$( "#main-progress-bar" ).animate({
		width: "75%"
	}, 100, function() {
	    // Animation complete.
	});
});

$("#tracking-id-scan-barcode").click(function(){
	if(currentPick != 3){
		$( "#main-progress-bar" ).animate({
			width: "100%"
		}, 100, function() {
		    // Animation complete.
		});
		$("#alert-success-message").text(" 1 item packed");
		play_single_sound('1'); 
		$("#navbar").removeClass("navbar-default");
		$("#navbar").addClass("navbar-success");
		setTimeout(function(){
			$("#navbar").addClass("navbar-default");
			$("#navbar").removeClass("navbar-success");
			$( "#main-progress-bar" ).animate({
				width: "25%"
			}, 100, function() {
			    // Animation complete.
			});
		},2700)
		$("#success-alert").slideDown().delay(2000).slideUp();
		$("#item-scan").show();
		$("#tracking-id-scan").hide();
		$("#item-put").hide();
		$("#bottom-product").hide();
		
		currentPick++;
		$(".product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$(".product-name").html("<strong>1 x</strong> "+productNameList[currentPick-1]);
		$("#bottom-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$("#bottom-product-name").html("<strong>1 x</strong> "+productNameList[currentPick-1]);
		
		
	}
	else{
		$( "#main-progress-bar" ).animate({
			width: "100%"
		}, 100, function() {
		    // Animation complete.
		});
		$("#tracking-id-scan").hide();
		$("#full-screen-success").show();
		$("#screen-bottom").hide();
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
	$("#app-title").text("Prime Now");
	
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
})









