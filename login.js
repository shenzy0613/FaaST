var currentSlot = 1;
var currentPick = 1;
var currentSLAM = 1;
var productNameList = ["Coca-Cola, Mexican Coke 12 oz. (355ml), Heck... Pack of 6","Crayola Ultraclean Broadline Classic Washable Marker, 10ct",
					   "Kleenex Ultra Soft & Strong Facial Tissues, Medium Count Flat, 170 ct, 6 Pack"];
var asileNumber = ['17', '3', '226'];
var binNumber = ['260', '178', '008'];
var destBag = ['1','3','2'];
var typingTimer;
var quantity = [2,3,1];
var doneTypingInterval = 200;
var bin_barcode = "0";
var pick_barcode = ["0","0","0"];

$( "#pick-cart-scan-input" ).on('keyup',function(){
	clearTimeout(typingTimer);
  	typingTimer = setTimeout(pick_cart_scan_finish, doneTypingInterval);
})

$( "#pick-cart-scan-input" ).on('keydown',function(){
	clearTimeout(typingTimer);
})

$( "#slot-scan-input" ).on('keyup',function(){
	clearTimeout(typingTimer);
  	typingTimer = setTimeout(slot_scan_finish, doneTypingInterval);
})

$( "#slot-scan-input" ).on('keydown',function(){
	clearTimeout(typingTimer);
})

$( "#add-bag-scan-input" ).on('keyup',function(){
	clearTimeout(typingTimer);
  	typingTimer = setTimeout(add_bag_scan_finish, doneTypingInterval);
})

$( "#add-bag-scan-input" ).on('keydown',function(){
	clearTimeout(typingTimer);
})

$( "#bin-number-scan-input" ).on('keyup',function(){
	clearTimeout(typingTimer);
  	typingTimer = setTimeout(bin_number_scan_finish, doneTypingInterval);
})

$( "#bin-number-scan-input" ).on('keydown',function(){
	clearTimeout(typingTimer);
})

$( "#item-scan-input" ).on('keyup',function(){
	clearTimeout(typingTimer);
  	typingTimer = setTimeout(item_scan_finish, doneTypingInterval);
})

$( "#item-scan-input" ).on('keydown',function(){
	clearTimeout(typingTimer);
})

$( "#item-place-scan-input" ).on('keyup',function(){
	clearTimeout(typingTimer);
  	typingTimer = setTimeout(item_place_scan_finish, doneTypingInterval);
})

$( "#item-place-scan-input" ).on('keydown',function(){
	clearTimeout(typingTimer);
})

$( "#slam-station-scan-input" ).on('keyup',function(){
	clearTimeout(typingTimer);
  	typingTimer = setTimeout(slam_station_scan_finish, doneTypingInterval);
})

$( "#slam-station-scan-input" ).on('keydown',function(){
	clearTimeout(typingTimer);
})

$( "#slam-bag-scan-input" ).on('keyup',function(){
	clearTimeout(typingTimer);
  	typingTimer = setTimeout(slam_bag_scan_finish, doneTypingInterval);
})

$( "#slam-bag-scan-input" ).on('keydown',function(){
	clearTimeout(typingTimer);
})

$( "#hazmat-scan-input" ).on('keyup',function(){
	clearTimeout(typingTimer);
  	typingTimer = setTimeout(hazmat_scan_finish, doneTypingInterval);
})

$( "#hazmat-scan-input" ).on('keydown',function(){
	clearTimeout(typingTimer);
})

$( "#slam-next-bag-scan-input" ).on('keyup',function(){
	clearTimeout(typingTimer);
  	typingTimer = setTimeout(slam_next_bag_scan_finish, doneTypingInterval);
})

$( "#slam-next-bag-scan-input" ).on('keydown',function(){
	clearTimeout(typingTimer);
})

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
				$( "#pick-cart-scan-input" ).focus();
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
	$("#slot-scan").hide();
	$("#add-bag-scan").hide();

	$("#cart-setup-bottom").hide();
	$("#bottom-product").hide();
	$("#bin-scan").hide();
	$("#item-scan").hide();
	$("#item-place").hide();
})

function pick_cart_scan_finish(){
	
	$("#pick-cart-scan").hide();
	
	$("#bottom-cart").show();
	$(".setup-current-slot").text(currentSlot);
	$(".bag-img").attr("src"," https://improvement-ninjas.amazon.com/s3files/s3get.cgi/brown-bag-"+currentSlot+".svg");

	$("#add-bag-scan").show();
	
	$( "#main-progress-bar" ).animate({
		width: 20*currentSlot+10+"%"
	}, 100, function() {
	    // Animation complete.
	});
	$( "#add-bag-scan-input" ).val("");
	$( "#add-bag-scan-input" ).focus();
}

function add_bag_scan_finish(){
	if(currentSlot != 4){
		currentSlot++;
		$(".setup-current-slot").text(currentSlot);
		$(".bag-img").attr("src"," https://improvement-ninjas.amazon.com/s3files/s3get.cgi/brown-bag-"+currentSlot+".svg");
		$( "#main-progress-bar" ).animate({
			width: 20*currentSlot+"%"
		}, 100, function() {
		    // Animation complete.
		});
		$( "#add-bag-scan-input" ).val("");
		$( "#add-bag-scan-input" ).focus();
	}
	else {
		$( "#main-progress-bar" ).animate({
			width: "100%"
		}, 100, function() {
		    $("#bottom-product").show();
		    $("#bottom-cart").show();
			$("#bin-scan").show();
			$("#add-bag-scan").hide();
			$("#navbar").removeClass("navbar-default");
			$("#navbar").addClass("navbar-success");
			$("#alert-success-message").text(" Cart setup complete");
			play_single_sound('1'); 
			$("#success-alert").slideDown();

			$( "#bin-number-scan-input" ).val("");
			$( "#bin-number-scan-input" ).focus();

			$( "#main-progress-bar" ).animate({
				width: "20%"
			}, 2700, function() {
			    $("#navbar").addClass("navbar-default");
				$("#navbar").removeClass("navbar-success");
				$("#success-alert").slideUp();
				$( "#main-progress" ).show();
			});
		});
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

	}
}

function bin_number_scan_finish(){

	if($( "#bin-number-scan-input" ).val() == bin_barcode){
		$("#item-scan-pic").attr("src"," https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$("#item-scan-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+ productNameList[currentPick-1]);
		$("#bin-scan").hide();
		$("#item-scan").show();
		$("#bottom-cart").hide();
		$("#bottom-product").hide();
		$("#bottom-bin").show();
		$( "#main-progress-bar" ).animate({
			width: "40%"
		}, 100, function() {
		    // Animation complete.
		});
		$( "#item-scan-input" ).val("");
		$( "#item-scan-input" ).focus();
	}
	else if( $( "#bin-number-scan-input" ).val() == bin_barcode.substring(0,$( "#bin-number-scan-input" ).val().length)){

	}
	else{
		$("#danger-alert").html("<strong>Incorrect barcode</strong>. Try again.");
		$("#danger-alert").slideDown();
		$("#navbar").addClass("navbar-danger");
		setTimeout(function(){
			$("#navbar").removeClass("navbar-danger");
			$("#danger-alert").slideUp();
		},1800);
		play_single_sound('4'); 
		$( "#bin-number-scan-input" ).val("");
	}
	
}

function item_scan_finish(){
	if($( "#item-scan-input" ).val() == pick_barcode[currentPick-1]){
		$(".number-item-dest-pic").attr("src"," https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$("#item-scan").hide();
		$("#item-place").show();
		$(".item-place-bag").text(destBag[currentPick-1]);
		$(".number-item-dest-bag").attr("src"," https://improvement-ninjas.amazon.com/s3files/s3get.cgi/brown-bag-"+destBag[currentPick-1]+".svg");
		$( "#main-progress-bar" ).animate({
			width: "60%"
		}, 100, function() {
		    // Animation complete.
		});
		$( "#item-place-scan-input" ).val("");
		$( "#item-place-scan-input" ).focus();
	}
	else if ( $( "#item-scan-input" ).val() == pick_barcode[currentPick-1].substring(0,$( "#item-scan-input" ).val().length)){

	}
	else{
		$("#danger-alert").html("<strong>Incorrect barcode</strong>. Try again.");
		
		$("#danger-alert").slideDown();
		$("#navbar").addClass("navbar-danger");
		setTimeout(function(){
			$("#navbar").removeClass("navbar-danger");
			$("#danger-alert").slideUp();
		},1800);
		play_single_sound('4'); 
		$( "#item-scan-input" ).val("");
	}
}

function item_place_scan_finish(){
	if(quantity[currentPick-1]!=1){
		$(".quatityCheck").children().removeClass("clicked");
		$("#item-place").hide();
		$("#item-quantity").show();

		$("#bottom-confirm-quantity").show();
		$("#bottom-bin").hide();

		$( "#main-progress-bar" ).animate({
			width: "80%"
		}, 100, function() {
		    // Animation complete.
		});
	}
	else
	{	if(currentPick != 3){
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});
			$("#alert-success-message").text(" "+quantity[currentPick-1]+" item picked");
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
			},2700)
			$("#success-alert").slideDown().delay(2000).slideUp();
			$("#bin-scan").show();
			$("#item-place").hide();
			$("#bottom-product").show();
			$("#bottom-cart").show();
			$("#bottom-bin").hide();
			$(".quatityCheck").children().removeClass("clicked");
			currentPick++;
			$("#bin-bottom-product-pic").attr("src"," https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
			$("#bin-bottom-product-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+productNameList[currentPick-1]);
			$("#quantity-product-pic").attr("src"," https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
			$("#quantity-product-name").html(productNameList[currentPick-1]);
			$("#alert-product-name").html(productNameList[currentPick-1]);
			$("#alert-product-quantity").html(quantity[currentPick-1]);
			$(".asile-number-digit").html(asileNumber[currentPick-1]);
			$(".bin-number-digit").html(binNumber[currentPick-1]);
			if(quantity[currentPick-1] == 1)
				$("#item-place-item").html(quantity[currentPick-1]+" item");
			else
				$("#item-place-item").html(quantity[currentPick-1]+" items");
			$(".number-item-dest-number").html(quantity[currentPick-1]);

			$( "#bin-number-scan-input" ).val("");
			$( "#bin-number-scan-input" ).focus();
		}
		else{
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});
			
			$("#item-place").hide();
			$("#bottom-confirm-quantity").hide();
			$("#bottom-bin").hide();
			$("#full-screen-success").show();
			$("#navbar").removeClass("navbar-default");
			$("#navbar").addClass("navbar-success");
			$( "#main-progress" ).hide();
			play_single_sound('1'); 
		}

	}
	
}

$("#reenterQuantity").click(function(){
	$(".large-error-alert").hide();
	$("#item-quantity").show();
	$("#bottom-confirm-quantity").show();
	$("#navbar").removeClass("navbar-danger");
})

$("#pick-complete-continue").click(function(){
	if(currentSLAM == 1){
		$("#login-photo").show().delay(300).hide();
		$("#full-screen-success").hide();
		setTimeout(function(){
			$("#app-title").text("SLAM");
			$("#navbar").removeClass("navbar-success");
			$("#slam-scan").show();
			$( "#main-progress" ).show();
			$( "#main-progress-bar" ).animate({
				width: "10%"
			}, 100, function() {
			    // Animation complete.
			});
			$("#bottom-bin").hide();

			$( "#slam-station-scan-input" ).val("");
			$( "#slam-station-scan-input" ).focus();
		},300);
	}
	else{
		currentSlot = 1;
		currentPick = 1;
		currentSLAM = 1;
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
	}
	
})

function slam_station_scan_finish(){
	$("#slam-scan").hide();
	$("#bag-scan").show();
	$("#bottom-slam").show();
	$( "#main-progress-bar" ).animate({
		width: "50%"
	}, 100, function() {
	    // Animation complete.
	});
	$("#slam-bag-scan-input").val("");
	$("#slam-bag-scan-input").focus();
	$(".bag-img").attr("src","img/brown-bag.svg");
}

function slam_bag_scan_finish(){
	currentSLAM++;
	$("#alert-success-message").html(" Bag complete")
	if(Math.random()<0.5){
		$("#bag-scan").hide();
		$("#slam-label").show();
		$("#bottom-slam").hide();
		$("#bottom-bag").show();
		$( "#main-progress-bar" ).animate({
			width: "40%"
		}, 100, function() {
		    // Animation complete.
		});
		$("#hazmat-scan-input").val("");
		$("#hazmat-scan-input").focus();
	}
	else{
		$("#bag-scan").hide();
		$("#next-bag-scan").show();
		$( "#main-progress-bar" ).animate({
			width: "100%"
		}, 100, function() {
		    // Animation complete.
		});
		$("#success-alert").slideDown().delay(2000).slideUp();
		$("#navbar").removeClass("navbar-default");
		$("#navbar").addClass("navbar-success");
		setTimeout(function(){
			$("#navbar").addClass("navbar-default");
			$("#navbar").removeClass("navbar-success");
			$( "#main-progress-bar" ).animate({
				width: "50%"
			}, 100, function() {
			    // Animation complete.
			});
		},2700)
		$("#slam-next-bag-scan-input").val("");
		$("#slam-next-bag-scan-input").focus();
	}
	
}

function hazmat_scan_finish(){
	$("#slam-label").hide();
	$("#next-bag-scan").show();

	$("#bottom-bag").hide();
	$("#bottom-slam").show();

	$("#success-alert").slideDown().delay(2000).slideUp();
	$("#navbar").removeClass("navbar-default");
	$("#navbar").addClass("navbar-success");
	setTimeout(function(){
		$("#navbar").addClass("navbar-default");
		$("#navbar").removeClass("navbar-success");
		$( "#main-progress-bar" ).animate({
			width: "50%"
		}, 100, function() {
		    // Animation complete.
		});
	},2700)

	$("#slam-next-bag-scan-input").val("");
	$("#slam-next-bag-scan-input").focus();

	$( "#main-progress-bar" ).animate({
		width: "50%"
	}, 100, function() {
	    // Animation complete.
	});
	play_single_sound('1'); 
}

function slam_next_bag_scan_finish(){
	
	if(currentSLAM!=4){
		
		currentSLAM++;
		if(Math.random()<0.2){
			$("#navbar").removeClass("navbar-default");
			$("#navbar").addClass("navbar-success");
			$("#bottom-slam").show();
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});
			setTimeout(function(){
				$("#navbar").addClass("navbar-default");
				$("#navbar").removeClass("navbar-success");
				$( "#main-progress-bar" ).animate({
					width: "20%"
				}, 100, function() {
				    // Animation complete.
				});
			},2700)
			$("#success-alert").slideDown().delay(2000).slideUp();
			$("#slam-next-bag-scan-input").val("");
			$("#slam-next-bag-scan-input").focus();
			play_single_sound('1'); 
		}
		else{
			$("#next-bag-scan").hide();
			$("#slam-label").show();
			$("#bottom-slam").hide();
			$("#bottom-bag").show();
			$( "#main-progress-bar" ).animate({
				width: "40%"
			}, 100, function() {
			    // Animation complete.
			});
			$("#hazmat-scan-input").val("");
			$("#hazmat-scan-input").focus();
		}
	}
	else{
		$("#navbar").addClass("navbar-success");
		$(".full-screen-message").html("SLAM complete")
		$("#full-screen-success").show();
		$("#pick-complete-continue").html("Pick next order");
		$("#next-bag-scan").hide();
		$("#bottom-slam").hide();
		play_single_sound('1'); 
	}
}

$("#large-error-continue").click(function(){
	$(".large-error-alert").hide();
	$(".large-warning-alert").show();
	$("#navbar").addClass("navbar-warning");
	$("#navbar").removeClass("navbar-danger");
})

$("#large-warning-continue").click(function(){
	$(".large-warning-alert").hide();
	$(".large-success-alert").show();
	$("#navbar").addClass("navbar-success");
	$("#navbar").removeClass("navbar-warning");
})

$("#large-success-continue").click(function(){
	$(".large-success-alert").hide();
	$(".large-error-alert").show();
	$("#navbar").addClass("navbar-danger");
	$("#navbar").removeClass("navbar-success");
})
