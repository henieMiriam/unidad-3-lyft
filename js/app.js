//en la perte bsuperior se deben incluir declaraciones,
/*$("#formValidate").validate({
       rules: {
           uname: {
               required: true,
               minlength: 5
           },
           cemail: {
               required: true,
               email:true
           },
           password: {
       required: true,
       minlength: 5
     },
     cpassword: {
       required: true,
       minlength: 5,
       equalTo: "#password"
     },
     curl: {
               required: true,
               url:true
           },
           crole:"required",
           ccomment: {
       required: true,
       minlength: 15
           },
           cgender:"required",
     cagree:"required",
       },
       //For custom messages
       messages: {
           uname:{
               required: "Enter a username",
               minlength: "Enter at least 5 characters"
           },
           curl: "Enter your website",
       },
       errorElement : 'div',
       errorPlacement: function(error, element) {
         var placement = $(element).data('error');
         if (placement) {
           $(placement).append(error)
         } else {
           error.insertAfter(element);
         }
       }
    });*/



/*esta parte siempre va al final del codigo , icluye :
llamadas a funciones
declaracion de EVENTOS
llamadas del DOM
sintaxis jquery
*/

$(document).ready(function(){
/*  $( window ).on( "load")*/
  $(".lyft-Inicio").fadeOut(1000);
  $(".row").fadeIn(500);
  $('.modal').modal();
    });
