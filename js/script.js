var $ = require("jquery");


//transition of play and pause button
$(document).ready(function() {
  
  var btn = $(".button");
  btn.click(function() {
    btn.toggleClass("paused");
    return false;
  });
	
	//image carousel
	$("#menu").click(function(){
		$(".navItems").toggleClass("show");
		})
	
	var myIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = $(".podcastSlide");
	    for (i = 0; i < x.length; i++) {
	       x[i].style.display = "none";  
	    }
	    myIndex++;
	    if (myIndex > x.length) {myIndex = 1}    
	    x[myIndex-1].style.display = "block";  
	    setTimeout(carousel, 2000); // Change image every 2 seconds
	}

	//change the menu "burger" bars from inline to an x
	$("#menu").click(function(){
		$(".bar1").toggleClass("change");
		$(".bar2").toggleClass("change");
		$(".bar3").toggleClass("change");
	})
	//enable the podcastpopup player to be shown
	$("#navPodcast").click(function(){
		$("#popupPodcast").removeClass("hidden");
		$("#wrapper").addClass("fadeOut");
	})
	//enable the podcastpopup news to be shown
	$("#navNews").click(function(){
		$("#popupNews").removeClass("hidden");
		$("#wrapper").addClass("fadeOut");
	})
		
	//closes all dropdown menu items
	window.onclick = function(event) {
		if (!event.target.matches("#menu, .bar1, .bar2, .bar3")){

			var dropdowns = $(".navItems");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains("show")) {
					openDropdown.classList.remove("show");
					$(".bar1, .bar2, .bar3").removeClass("change");//transform the X back to a menu "burger"
					
				}
			}
		}
	};


	//hides the "popup" div when you click outside the div area
	$(document).mouseup(function(e) {
	    
		var container = $(".popup");
	    // if the target of the click isn't the container nor a descendant of the container
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	       
	       var j;
	       for (j = 0; j < container.length; j++) {//loops through so it that not all div elements with the class .popup needs to "open"
	       		var openContainer = container[j];
	       		if (!openContainer.classList.contains("hidden")) {
	       			openContainer.classList.add("hidden");//hides the "popup" div again
	       			$("#wrapper").removeClass("fadeOut");//removes the greyfilter from background
	       		}
	       }
	    }
	});

});

