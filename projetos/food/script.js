$(document).ready(function() {
    $('#mobile-btn').on('click',function(){
    $('#mobile-menu').toggleClass('active');
    $('#mobile-btn i').toggleClass('fa-bars fa-x');    
    });
});