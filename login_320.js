var currentSlot = 1;
var currentPick = 1;
var currentSLAM = 1;
var totalPicks = 10;
var productNameList = ["Crayola 12 Ct Twistables Colored Pencils",
						"Space Invader",
						"Cards Against Humanity",
						'Fire HD 6, 6" HD Display, Wi-Fi, 8 GB - Includes Special Offers, Black',
						"Hawthorn & Child",
						"4 Pk, BIC Brite Liner Highlighters, Chisel Tip, Assorted Colors, 5-Count",
						"Philips 433227 10.5-watt Slim Style Dimmable A19 LED Light Bulb, Soft White",
						"POP Game of Thrones: Daenerys Targaryen Vinyl Figure",
						"Speck Products SmartFlex Card Case for iPhone 5 & 5S",
						"Motorola HK250 Universal Bluetooth Headset - Retail Packaging - Black"];

var asileNumber = ['A17', 'B03', 'C226', 'D129', 'E232', 'F213', 'G341', 'H239', 'I890', 'J239'];
var binNumber = ['231A', '237C', '178D', '892A', '291F', '190H', '920G', '192B', '292D', '100E'];
var destBag = ['1','3','2','1','4','1','2','3','1','4'];
var quantity = [1,1,1,1,1,1,1,1,1,1];
var typingTimer;
var doneTypingInterval = 200;
var bin_barcode = ["0","0","0","0","0","0","0","0","0","0"];
var pick_barcode = ["0","0",
					"0","0",
					"0 ","0",
					"0","0",
					"0","0"];
var currentWindow;
var pickTime = {};
var lastTime, currentTime;
var sound_success = new Audio("audio/success.wav");
var sound_error = new Audio("audio/error.wav");
var sound_attention = new Audio("audio/attention.wav");

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


$( "#form" ).submit(function(e) {
	e.preventDefault();
	var username = $("#Input1").val();
	pickTime["associate"] = username;
	if (username.substring(0,4) == "user"){
		$("#associate_name").html(username)
		$("#danger-alert").hide();
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
				time_recording_start();
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

		$("#danger-alert").show();
		$("#sign-in-title").hide();
		$("#navbar").addClass("navbar-danger");
		$("#form").addClass("has-error");
		sound_error.play();
		$("#login").attr("style","margin-top:29px;");

	}
	currentWindow = "#pick-cart-scan";
	
})

$("#menu-btn").click(function() {
	if ( $("#menu").css('display') == 'none'){
    	$("#navbar").addClass("navbar-warning");
		$("#navbar").removeClass("navbar-default");
		$("#app-title").toggle();
		$("#app-menu").toggle();
		$("#navbar-right").toggle();
    	
		$("#menu").toggle();
		$("#menu-outbound").hide();
		$("#main-menu").show();
		$("#main-progress").hide();
		$("#main-screen").hide();
	}
	else if( $("#menu").css('display') != 'none' ){
		$("#menu").toggle();
		$("#main-screen").toggle();
		
		$("#navbar").removeClass("navbar-warning");
		$("#navbar").addClass("navbar-default");
		$("#app-title").toggle();
		$("#app-menu").toggle();
		$("#navbar-right").toggle();
		$("#main-progress").show();
	}
})

$('#signout').click(function(){
	$("#menu").hide();
	$("#app-title").toggle().text("Sign out");
	$("#app-menu").toggle();
	$("#navbar-right").show();
	$("#navbar-right").html('<a href="bootstrap-elements.html" data-target="#" class="dropdown-toggle" data-toggle="dropdown"><i class="material-icons">cancel</i></a>');
	$("#left-col").removeClass("has-menu");
	$("#main-screen").show();
	$("#main-screen-child").children().hide();
	$("#sign-out-confirm").show();
})

$("#yes-sign-out").click(function(){
	$("#app-title").text("Prime Now");
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
	$("#app-title").text("Prime Now");
	$("#navbar-right").html('<a href="javascript:void(0)" class="btn btn-raised btn-tertiary"><img src="img/Problem.svg"></a>');
	$("#navbar").removeClass("navbar-warning");
	$("#navbar").addClass("navbar-default");
	$("#sign-out-confirm").hide();
	$("#main-progress").show();
	$(currentWindow).show();
	$("#cart-setup-bottom").show();
})

$("#navbar-right").click(function(){
	if ( $("#sign-out-confirm").css('display') != 'none'){
		$("#app-title").text("Prime Now");
		$("#navbar-right").html('<a href="javascript:void(0)" class="btn btn-raised btn-tertiary"><img src="img/Problem.svg"></a>');
		$("#navbar").removeClass("navbar-warning");
		$("#navbar").addClass("navbar-default");
		$("#sign-out-confirm").hide();
		$(currentWindow).show();
		$("#main-progress").show();
		$("#cart-setup-bottom").show();
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
	currentWindow = "#pick-cart-scan";
})

function pick_cart_scan_finish(){
	$("#pick-cart-scan").hide();
	$("#bottom-cart").show();
	$(".setup-current-slot").text(currentSlot);
	$(".bag-img").attr("src","img/brown-bag-"+currentSlot+".svg");
	$( "#slot-scan-input" ).val("");
	$( "#slot-scan-input" ).focus();

	$("#add-bag-scan").show();
	
	$( "#main-progress-bar" ).animate({
		width: 20*currentSlot+10+"%"
	}, 100, function() {
	    // Animation complete.
	});
	$( "#add-bag-scan-input" ).val("");
	$( "#add-bag-scan-input" ).focus();
	currentWindow = "#add-bag-scan";
	add_time_stamp("scan pick cart");
}

function add_bag_scan_finish(){
	if(currentSlot != 4){
		add_time_stamp("add bag "+currentSlot);
		currentSlot++;
		$(".setup-current-slot").text(currentSlot);
		$(".bag-img").attr("src","img/brown-bag-"+currentSlot+".svg");
		$( "#main-progress-bar" ).animate({
			width: 20*currentSlot+10+"%"
		}, 100, function() {
		    // Animation complete.
		});
		$( "#add-bag-scan-input" ).val("");
		$( "#add-bag-scan-input" ).focus();
		currentWindow = "#add-bag-scan";
	}
	else {	
		add_time_stamp("add bag "+currentSlot);
		pickTime["scan bin error"] = 0;
		pickTime["scan item error"] = 0;
		pickTime["enter quantity error"] = 0;
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
			
			$("#success-alert").slideDown();
			sound_success.play();

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
		$("#bin-bottom-product-pic").attr("src","img/pick-"+currentPick+".jpg");
		$("#bin-bottom-product-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+productNameList[currentPick-1]);

		$("#quantity-product-pic").attr("src","img/pick-"+currentPick+".jpg");
		$("#quantity-product-name").html(productNameList[currentPick-1]);

		$(".asile-number-digit").html(asileNumber[currentPick-1]);
		$(".bin-number-digit").html(binNumber[currentPick-1]);
		bin_number_color(binNumber[currentPick-1][3].toLowerCase());

		if(quantity[currentPick-1] == 1)
			$("#item-place-item").html(quantity[currentPick-1]+" item");
		else
			$("#item-place-item").html(quantity[currentPick-1]+" items");
		$(".number-item-dest-number").html(quantity[currentPick-1]);

		currentWindow = "#bin-scan";
	}
}

function bin_number_scan_finish(){
	if($( "#bin-number-scan-input" ).val() == bin_barcode[currentPick-1]){
		add_time_stamp("scan bin "+currentPick);
		$("#item-scan-pic").attr("src","img/pick-"+currentPick+".jpg");
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
		currentWindow = "#item-scan";
	}
	else if( $( "#bin-number-scan-input" ).val() == bin_barcode.substring(0,$( "#bin-number-scan-input" ).val().length)){

	}
	else{
		sound_error.play();
		$("#danger-alert").html("<strong>Incorrect barcode</strong>. Try again.");
		$("#danger-alert").slideDown();
		$("#navbar").addClass("navbar-danger");
		setTimeout(function(){
			$("#navbar").removeClass("navbar-danger");
		},1800);
		setTimeout(function(){
			$("#danger-alert").slideUp();
		},1300);
		
		$( "#bin-number-scan-input" ).val("");
		pickTime["scan bin error"]++;
	}
}

function item_scan_finish(){
	if($( "#item-scan-input" ).val() == pick_barcode[currentPick-1]){
		add_time_stamp("scan item "+currentPick);
		$(".number-item-dest-pic").attr("src","img/pick-"+currentPick+".jpg");
		$("#item-scan").hide();
		$("#bottom-bin").hide();
		$("#item-place").show();
		$(".item-place-bag").text(destBag[currentPick-1]);
		$(".number-item-dest-bag").attr("src","img/brown-bag-"+destBag[currentPick-1]+".svg");
		$( "#main-progress-bar" ).animate({
			width: "60%"
		}, 100, function() {
		    // Animation complete.
		});
		$( "#item-place-scan-input" ).val("");
		$( "#item-place-scan-input" ).focus();
		currentWindow = "#item-place";
	}
	else if ( $( "#item-scan-input" ).val() == pick_barcode[currentPick-1].substring(0,$( "#item-scan-input" ).val().length)){

	}
	else{
		sound_error.play();
		$("#danger-alert").html("<strong>Incorrect barcode</strong>. Try again.");
		$("#item-scan-title").html("");
		$("#item-scan-pic").attr("style", "margin-top:5px");
		$("#danger-alert").show();
		
		$("#navbar").addClass("navbar-danger");
		setTimeout(function(){
			$("#navbar").removeClass("navbar-danger");
			$("#item-scan-title").html("Scan <strong>item</strong>");
			$("#item-scan-pic").attr("style", "margin-top: 0px");
			$("#danger-alert").hide();
			
		},1800);
		
		$( "#item-scan-input" ).val("");
		pickTime["scan item error"]++;
	}
}

function item_place_scan_finish(){
	add_time_stamp("place item "+currentPick);
	if(quantity[currentPick-1]!=1){
		$("#item-place").hide();
		$("#item-quantity").show();
		$( "#place-item-quantity" ).focus();
		$(".quantity-check-product-name").html(productNameList[currentPick-1]);

		$("#bottom-confirm-quantity").show();
		$("#bottom-bin").hide();

		$( "#main-progress-bar" ).animate({
			width: "80%"
		}, 100, function() {
		    // Animation complete.
		});
		currentWindow = "#item-quantity";
	}
	else
	{	pickTime["enter quantity item " + currentPick] = 0;
		if(currentPick != totalPicks){
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});
			sound_success.play();
			$("#alert-success-message").text(" "+quantity[currentPick-1]+" item picked");
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
			$("#bin-bottom-product-pic").attr("src","img/pick-"+currentPick+".jpg");
			$("#bin-bottom-product-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+productNameList[currentPick-1]);
			$("#quantity-product-pic").attr("src","img/pick-"+currentPick+".jpg");
			$("#quantity-product-name").html(productNameList[currentPick-1]);
			$("#alert-product-name").html(productNameList[currentPick-1]);
			$("#alert-product-quantity").html(quantity[currentPick-1]);
			$(".asile-number-digit").html(asileNumber[currentPick-1]);
			$(".bin-number-digit").html(binNumber[currentPick-1]);
			bin_number_color(binNumber[currentPick-1][3].toLowerCase());

			if(quantity[currentPick-1] == 1)
				$("#item-place-item").html(quantity[currentPick-1]+" item");
			else
				$("#item-place-item").html(quantity[currentPick-1]+" items");
			$(".number-item-dest-number").html(quantity[currentPick-1]);
			$( "#bin-number-scan-input" ).val("");
			$( "#bin-number-scan-input" ).focus();
			currentWindow = "#bin-scan";
		}
		else{
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});
			sound_success.play();
			
			$("#item-place").hide();
			$("#bottom-confirm-quantity").hide();
			$("#bottom-bin").hide();
			$("#full-screen-success").show();
			$("#navbar").removeClass("navbar-default");
			$("#navbar").addClass("navbar-success");
			$( "#main-progress" ).hide();
			
			currentWindow = "#full-screen-success"; 
		}

	}
	
}

$("#quantity-confirm-form").submit(function(e){
	e.preventDefault();
	var clickedquantity = $("#place-item-quantity").val();
	if(clickedquantity == quantity[currentPick-1]){
		add_time_stamp("enter quantity item "+currentPick);
		if(currentPick != totalPicks){
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});
			if(quantity[currentPick-1] == 1)
				$("#alert-success-message").text(" "+quantity[currentPick-1]+" item picked");
			else
				$("#alert-success-message").text(" "+quantity[currentPick-1]+" items picked");
			sound_success.play();
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
			$("#item-quantity").hide();
			$("#bottom-confirm-quantity").hide();
			$(".quatityCheck").children().removeClass("clicked");
			$( "#bin-number-scan-input" ).val("");
			$( "#bin-number-scan-input" ).focus();
			currentPick++;
			$("#bin-bottom-product-pic").attr("src","img/pick-"+currentPick+".jpg");
			$("#bin-bottom-product-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+productNameList[currentPick-1]);
			$("#quantity-product-pic").attr("src","img/pick-"+currentPick+".jpg");
			$("#quantity-product-name").html(productNameList[currentPick-1]);
			$(".asile-number-digit").html(asileNumber[currentPick-1]);
			$(".bin-number-digit").html(binNumber[currentPick-1]);
			bin_number_color(binNumber[currentPick-1][3].toLowerCase());

			if(quantity[currentPick-1] == 1)
				$("#item-place-item").html(quantity[currentPick-1]+" item");
			else
				$("#item-place-item").html(quantity[currentPick-1]+" items");
			$(".number-item-dest-number").html(quantity[currentPick-1]);
			$("#alert-product-name").html(productNameList[currentPick-1]);
			$("#alert-product-quantity").html(quantity[currentPick-1]);
			currentWindow = "#bin-scan";
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
			sound_success.play();
			currentWindow = "#full-screen-success";
		}
	}
	else{
		sound_error.play();
		$(".quatityCheck").children().removeClass("clicked");
		$(".large-error-alert").show();
		$("#item-quantity").hide();
		$("#bottom-confirm-quantity").hide();
		$("#navbar").addClass("navbar-danger");
		$("#main-progress").hide();
		pickTime["enter quantity error"]++;
	}
	$("#place-item-quantity").val("");
	$( "#place-item-quantity" ).focus();
})

$("#reenterQuantity").click(function(){
	$(".large-error-alert").hide();
	$("#item-quantity").show();
	$("#bottom-confirm-quantity").show();
	$("#navbar").removeClass("navbar-danger");
	$("#main-progress").show();
	$( "#place-item-quantity" ).focus();
})

$("#pick-complete-continue").click(function(){
	if(currentSLAM == 1){
		$("#full-screen-success").hide();
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
		currentWindow = "#slam-scan";
		add_time_stamp("go to slam");
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
		add_time_stamp("finish");
		console.log(pickTime);

		var json = JSON.stringify(pickTime);
		var blob = new Blob([json], {type: "application/json"});
		var url  = URL.createObjectURL(blob);

		var a = document.createElement('a');
		a.download    = "pickTime.json";
		a.href        = url;
		a.textContent = "Download Result";
		document.getElementById('download_pickTime').appendChild(a);
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
	currentWindow = "#bag-scan";
	add_time_stamp("scan slam station");
}

function slam_bag_scan_finish(){
	add_time_stamp("slam bag "+currentSLAM);
	$("#alert-success-message").html(" Bag complete")
	if(Math.random()<0.5){
		$("#bag-scan").hide();
		$("#slam-label").show();
		$("#bottom-slam").hide();
		$("#bottom-bag").show();
		$( "#main-progress-bar" ).animate({
			width: "80%"
		}, 100, function() {
		    // Animation complete.
		});
		$("#hazmat-scan-input").val("");
		$("#hazmat-scan-input").focus();
		currentWindow = "#slam-label";
	}
	else{
		pickTime["hazmat sticker bag "+currentSLAM] = 0;
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
		currentWindow = "#next-bag-scan";
		currentSLAM++;
	}
}

function hazmat_scan_finish(){
	add_time_stamp("hazmat sticker bag "+currentSLAM);
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
	sound_success.play();
	currentWindow = "#next-bag-scan";
	currentSLAM++;
}

function slam_next_bag_scan_finish(){
	add_time_stamp("slam bag "+currentSLAM);
	if(currentSLAM!=4){
		if(Math.random()<0.5){
			pickTime["hazmat sticker bag "+currentSLAM] = 0
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
					width: "50%"
				}, 100, function() {
				    // Animation complete.
				});
			},2700)
			$("#success-alert").slideDown().delay(2000).slideUp();
			$("#slam-next-bag-scan-input").val("");
			$("#slam-next-bag-scan-input").focus();
			sound_success.play();
			currentSLAM++;
		}
		else{
			$("#next-bag-scan").hide();
			$("#slam-label").show();
			$("#bottom-slam").hide();
			$("#bottom-bag").show();
			$( "#main-progress-bar" ).animate({
				width: "80%"
			}, 100, function() {
			    // Animation complete.
			});
			$("#hazmat-scan-input").val("");
			$("#hazmat-scan-input").focus();
			currentWindow = "#slam-label";
		}
	}
	else{
		$("#navbar").addClass("navbar-success");
		$(".full-screen-message").html("SLAM complete")
		$("#full-screen-success").show();
		$("#pick-complete-continue").html("Pick next order");
		$("#next-bag-scan").hide();
		$("#bottom-slam").hide();
		sound_success.play();
		currentWindow = "#full-screen-success";
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

$(window).resize(function(){
	$("#screen-size").html(screen.width + " x " + screen.height + " + " + $(window).width() + " x " + $(window).height());
});

function time_recording_start(){
	lastTime = $.now();
	pickTime["start time"] = lastTime;
}

function add_time_stamp(item){
	currentTime = $.now();
	pickTime[item] = currentTime - lastTime;
	lastTime = currentTime;
	console.log(item);
}

function bin_number_color(item){
	$("#scan-bin-number").removeClass("bin-a");
	$("#scan-bin-number").removeClass("bin-b");
	$("#scan-bin-number").removeClass("bin-c");
	$("#scan-bin-number").removeClass("bin-d");
	$("#scan-bin-number").removeClass("bin-e");
	$("#scan-bin-number").removeClass("bin-f");
	$("#scan-bin-number").removeClass("bin-g");
	$("#scan-bin-number").removeClass("bin-h");
	$("#scan-bin-number").removeClass("bin-i");
	$("#scan-bin-number").addClass("bin-"+item);
	$("#scan-label-number").removeClass("label-a");
	$("#scan-label-number").removeClass("label-b");
	$("#scan-label-number").removeClass("label-c");
	$("#scan-label-number").removeClass("label-d");
	$("#scan-label-number").removeClass("label-e");
	$("#scan-label-number").removeClass("label-f");
	$("#scan-label-number").removeClass("label-g");
	$("#scan-label-number").removeClass("label-h");
	$("#scan-label-number").removeClass("label-i");
	$("#scan-label-number").addClass("label-"+item);
}
