var currentSlot = 1;
var currentPick = 1;
var currentSLAM = 1;
var productNameList = ["可口可乐碳酸饮料 玻璃瓶可口可乐汽水 500ml*6瓶","Crayola 绘儿乐 12色可水洗粗头水笔","Kleenex舒洁 经典花纹盒装 面纸 170抽2层(无香) 6盒装"];
var asileNumber = ['17', '3', '226'];
var binNumber = ['260', '178', '008'];
var destBag = ['1','3','2'];
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
		$("#main-progress").show();
			
		
	}
})

$('#signout').click(function(){
	$("#menu").hide();
	$("#app-title").toggle().text("登出");
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
	$("#app-title").text("Prime Now");
	$("#navbar-right").html('<a href="javascript:void(0)" class="btn btn-raised btn-tertiary"><img src="img/Problem.svg"></a>');
	$("#menuArrowCol").show();
	$("#navbar").removeClass("navbar-warning");
	$("#navbar").addClass("navbar-default");
	$("#sign-out-confirm").hide();
})

$("#navbar-right").click(function(){
	if ( $("#sign-out-confirm").css('display') != 'none'){
		$("#app-title").text("Prime Now");
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
	$("#app-title").toggle().text("拣货");
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

$("#pick-cart-scan-barcode").click(function(){
	$("#slot-scan").show();
	$("#pick-cart-scan").hide();
	$("#bottom-cart").show();
	$( "#main-progress-bar" ).animate({
		width: "20%"
	}, 100, function() {
	    // Animation complete.
	});
	$(".setup-current-slot").text(currentSlot);
	$(".bag-img").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/brown-bag-"+currentSlot+".svg");
})

$("#slot-scan-tag").click(function(){
	$("#add-bag-scan").show();
	$("#slot-scan").hide();
	$( "#main-progress-bar" ).animate({
		width: 20*currentSlot+10+"%"
	}, 100, function() {
	    // Animation complete.
	});
})

$("#add-bag-scan-bag").click(function(){
	if(currentSlot != 4){
		currentSlot++;
		$(".setup-current-slot").text(currentSlot);
		$(".bag-img").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/brown-bag-"+currentSlot+".svg");
		$("#slot-scan").show();
		$("#add-bag-scan").hide();
		$( "#main-progress-bar" ).animate({
			width: 20*currentSlot+"%"
		}, 100, function() {
		    // Animation complete.
		});
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
			$("#alert-success-message").text(" 推车设置完毕");
			play_single_sound('1'); 
			$("#success-alert").slideDown().delay(2000).slideUp();
			
			$( "#main-progress-bar" ).animate({
				width: "25%"
			}, 2700, function() {
			    $("#navbar").addClass("navbar-default");
				$("#navbar").removeClass("navbar-success");
				$( "#main-progress" ).show();
			});
		});
		$("#bin-bottom-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$("#bin-bottom-product-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+productNameList[currentPick-1]);

		$("#quantity-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
		$("#quantity-product-name").html(productNameList[currentPick-1]);

		$(".asile-number-digit").html(asileNumber[currentPick-1]);
		$(".bin-number-digit").html(binNumber[currentPick-1]);
		
		$("#item-place-item").html(quantity[currentPick-1]+"件");
		$(".number-item-dest-number").html(quantity[currentPick-1]);
	}
	
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
		width: "50%"
	}, 100, function() {
	    // Animation complete.
	});
});

$("#item-scan-pic").click(function(){
	$(".number-item-dest-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
	$(".item-place-bag").text(destBag[currentPick-1]);
	$(".number-item-dest-bag").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/brown-bag-"+destBag[currentPick-1]+".svg");

	$("#item-scan").hide();
	$("#item-place").show();
	
	$( "#main-progress-bar" ).animate({
		width: "75%"
	}, 100, function() {
	    // Animation complete.
	});
});

$("#item-place").click(function(){
	if(quantity[currentPick-1]!=1){
		$("#item-place").hide();
		$("#item-quantity").show();

		$("#bottom-confirm-quantity").show();
		$("#bottom-bin").hide();
	}
	else{	
		if(currentPick != 3){
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});

			$("#alert-success-message").text(" 拣到"+quantity[currentPick-1]+"件货品");
			play_single_sound('1'); 
			$("#navbar").removeClass("navbar-default");
			$("#navbar").addClass("navbar-success");

			setTimeout(function(){
				$("#navbar").addClass("navbar-default");
				$("#navbar").removeClass("navbar-success");
				$( "#main-progress-bar" ).animate({
					width: "25%"
				}, 100, function() {
				
				});
			},2700);

			$("#success-alert").slideDown().delay(2000).slideUp();

			$("#bin-scan").show();
			$("#item-place").hide();

			$("#bottom-product").show();
			$("#bottom-cart").show();
			$("#bottom-bin").hide();

			$(".quatityCheck").children().removeClass("clicked");

			currentPick++;
			$("#bin-bottom-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
			$("#bin-bottom-product-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+productNameList[currentPick-1]);

			$("#quantity-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
			$("#quantity-product-name").html(productNameList[currentPick-1]);

			$("#alert-product-name").html(productNameList[currentPick-1]);
			$("#alert-product-quantity").html(quantity[currentPick-1]);

			$(".asile-number-digit").html(asileNumber[currentPick-1]);
			$(".bin-number-digit").html(binNumber[currentPick-1]);
			
			$("#item-place-item").html(quantity[currentPick-1]+"件");
			$(".number-item-dest-number").html(quantity[currentPick-1]);
			
		}
		else{
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});
			
			$("#item-quantity").hide();
			$("#item-place").hide();
			$("#bottom-confirm-quantity").hide();
			$("#full-screen-success").show();
			$("#bottom-bin").hide();

			$("#navbar").removeClass("navbar-default");
			$("#navbar").addClass("navbar-success");

			$( "#main-progress" ).hide();
			play_single_sound('1'); 
		}

	}
	
});

$("#quantity-confirm-btn").click(function(){
	if(clickedquantity == quantity[currentPick-1]){
		if(currentPick != 3){
			$( "#main-progress-bar" ).animate({
				width: "100%"
			}, 100, function() {
			    // Animation complete.
			});
			
			$("#alert-success-message").text(" 拣到"+quantity[currentPick-1]+"件货品");
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
			},2700);

			$("#success-alert").slideDown().delay(2000).slideUp();

			$("#bin-scan").show();
			$("#bottom-product").show();
			$("#bottom-cart").show();
			$("#bottom-bin").hide();
			$("#item-quantity").hide();

			$("#bottom-confirm-quantity").hide();
			$(".quatityCheck").children().removeClass("clicked");

			currentPick++;
			$("#bin-bottom-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
			$("#bin-bottom-product-name").html("<strong>"+quantity[currentPick-1]+" x</strong> "+productNameList[currentPick-1]);

			$("#quantity-product-pic").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/pick-"+currentPick+".jpg");
			$("#quantity-product-name").html(productNameList[currentPick-1]);

			$(".asile-number-digit").html(asileNumber[currentPick-1]);
			$(".bin-number-digit").html(binNumber[currentPick-1]);

			$("#item-place-item").html(quantity[currentPick-1]+"件");
			$(".number-item-dest-number").html(quantity[currentPick-1]);

			$("#alert-product-name").html(productNameList[currentPick-1]);
			$("#alert-product-quantity").html(quantity[currentPick-1]);
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
})

$("#reenterQuantity").click(function(){
	$(".large-error-alert").hide();
	$("#item-quantity").show();
	$("#bottom-confirm-quantity").show();
	$("#navbar").removeClass("navbar-danger");
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

$("#scan-slam-scan").click(function(){
	$("#slam-scan").hide();
	$("#bag-scan").show();
	$("#bottom-slam").show();
	$(".slam-current-bag").html(currentSLAM);
	$(".slam-bag-img").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/brown-bag-"+currentSLAM+".svg");
	$( "#main-progress-bar" ).animate({
		width: "20%"
	}, 100, function() {
	    // Animation complete.
	});
})

$("#bag-scan-bag").click(function(){
	$("#bag-scan").hide();
	$("#slam-quantity").show();
	$("#bottom-slam").hide();
	$("#bottom-check-quantity").show();
	$("#slam-item-quantity").focus();
	$( "#main-progress-bar" ).animate({
		width: "40%"
	}, 100, function() {
	    // Animation complete.
	});
})

$("#quantity-check-btn").click(function(){
	$("#slam-quantity").hide();
	$("#slam-label").show();
	$("#bottom-check-quantity").hide();
	$("#slam-item-quantity").val("");
	$( "#main-progress-bar" ).animate({
		width: "60%"
	}, 100, function() {
	    // Animation complete.
	});
})

$("#slam-label-continue").click(function(){
	$("#slam-label").hide();
	$("#slam-print").show();
	$( "#main-progress-bar" ).animate({
		width: "80%"
	}, 100, function() {
	    // Animation complete.
	});
})

$("#slam-print-continue").click(function(){
	play_single_sound('1'); 
	if(currentSLAM!=4){
		$("#bag-scan").show();
		$("#slam-print").hide();
		$(".slam-current-bag").html(currentSLAM);
		$("#alert-success-message").text(" "+currentSLAM+"号袋完成");
		currentSLAM++;
		$(".slam-current-bag").html(currentSLAM);
		$(".slam-bag-img").attr("src","https://improvement-ninjas.amazon.com/s3files/s3get.cgi/brown-bag-"+currentSLAM+".svg");
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
	}
	else{
		$("#navbar").addClass("navbar-success");
		$(".full-screen-message").html("SLAM 完成")
		$("#full-screen-success").show();
		$("#slam-print").hide();
	}
})

