window.addEventListener("load", function() {
  let clicked = [];
  
  for(let i=1; i<=7; i++) {
    document.getElementById(`item${i}`).addEventListener("click", function() {
	  if(!clicked[i-1]) {
		if(window.innerWidth > 900) {
	      document.getElementById("thirdSection").style.height = document.getElementById("thirdSection").offsetHeight + 220 + "px";
		} else {
		  document.getElementById("thirdSection").style.height = document.getElementById("thirdSection").offsetHeight + 100 + "px";
		}
        document.getElementById(`ingredient${i}`).style.display = "Block";
	    document.getElementById(`plusMinus${i}`).innerHTML = "-";
	    clicked[i-1] = true;
	  } else {
		if(window.innerWidth > 900) {
	      document.getElementById("thirdSection").style.height = document.getElementById("thirdSection").offsetHeight - 220 + "px";
		} else {
		  document.getElementById("thirdSection").style.height = document.getElementById("thirdSection").offsetHeight - 100 + "px";
		}
        document.getElementById(`ingredient${i}`).style.display = "None";
	    document.getElementById(`plusMinus${i}`).innerHTML = "+";
	    clicked[i-1] = false;
	  }
    });
  }
  
  for(let i=8; i<=13; i++) {
    document.getElementById(`question${i}`).addEventListener("click", function() {
	  if(!clicked[i-1]) {
	    document.getElementById(`answer${i}`).style.display = "Block";
	    document.getElementById(`plusMinus${i}`).innerHTML = "-";
	    clicked[i-1] = true;
	  } else {
	    document.getElementById(`answer${i}`).style.display = "None";
	    document.getElementById(`plusMinus${i}`).innerHTML = "+";
	    clicked[i-1] = false;
	  }
    });
  }
  
  document.getElementById("contact").addEventListener("click", function() {
	if(!clicked[13]) {
	  document.getElementById("contactForm").style.display = "Flex";
	  clicked[13] = true;
	} else {
	  document.getElementById("contactForm").style.display = "None";
	  clicked[13] = false;
	}
  });
  
  window.addEventListener("click", function(e) {
	if(clicked[13]) {
	  if((!document.getElementById("contactForm").contains(e.target)) && (!document.getElementById("contact").contains(e.target))) {
	    document.getElementById("contactForm").style.display = "None";
	    clicked[13] = false;
	  }
	}
  });
  
  document.getElementById("openMenu").addEventListener("click", function() {
	document.getElementById("menuZone").style.display = "Block";
  });
  
  document.getElementById("closeMenu").addEventListener("click", function() {
	document.getElementById("menuZone").style.display = "None";
  });
});