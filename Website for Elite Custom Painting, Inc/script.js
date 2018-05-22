/* 
   Lakeland Reeds Bed & Breakfast style sheet 
   Filename: script.js

   Author: Lisa Caron  
   Date:   3/8/18 
   HTML5 and CSS3 Illustrated Unit M, Lessons
 */

 /* create variables */ 
 var fromValue = document.querySelector(".feedback-from");
 var feedbackValue = document.querySelector(".feedback-content");
 var nameField = document.querySelector("#nameinput");
 var feedbackField = document.querySelector("#other-info");
 var form = document.querySelector(".contact-form");
 var feedbackPreview = document.querySelector(".feedback-preview");
 var submitButton = document.querySelector(".submitbutton")
 

 
 /* add text to preview section */
 function completePreview() {
	fromValue.textContent = nameField.value;
	feedbackValue.textContent = feedbackField.value;
	feedbackPreview.className = "feedback-preview show";
	if (form.checkValidity() === true) {
		submitButton.className = "submitbutton show";
	}
 }
 
 /*
 completePreview();
*/

/* create event listener for changes to form */
form.addEventListener("change", completePreview, false)


var myIndex = 0;
carousel();
function carousel(){
	var i;
	var x = document.getElementsByClassName("myPix");
	for (i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}
	x[myIndex-1].style.display = "block";
	setTimeout(carousel, 2000);
}
