var waypoint_dark_nav=new Waypoint({element:document.getElementById("aj_about"),handler:function(){$("nav").toggleClass("dark")},offset:48});$(".nav_dummy a").click(function(){return $("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-48},500),!1});
// 
// var waypoint_about = new Waypoint({
//   element: document.getElementById('aj_about'),
//   handler: function() {
// 	$( ".nav_dummy a" ).removeClass('active');  
//     $( "#nav_home a" ).toggleClass('active');
//   }
// })
// 
// var waypoint_volunteer = new Waypoint({
//   element: document.getElementById('aj_volunteer'),
//   handler: function() {
// 	$( ".nav_dummy a" ).removeClass('active');   
//     $( "#nav_volunteer a" ).toggleClass('active');
//   }
// })
// 
// var waypoint_donate = new Waypoint({
//   element: document.getElementById('aj_donate'),
//   handler: function() {
//     $( ".nav_dummy a" ).removeClass('active'); 	  
//     $( "#nav_donate a" ).toggleClass('active');
//   }
// })
// 
// var waypoint_contact = new Waypoint({
//   element: document.getElementById('aj_contact'),
//   handler: function() {
// 	  $( ".nav_dummy a" ).removeClass('active'); 
//     $( "#nav_contact a" ).toggleClass('active');
//   }
// })