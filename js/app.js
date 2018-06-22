//en la perte bsuperior se deben incluir declaraciones,


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
  $("userP").focusin(function(){
    $(this).addClass("newColor");
  });
  $("#verifyPhoneup").keypress(function(){
    if($(this).val().length ===10){
     $("#btnNextup").removeClass("disabled");
     swal("Good job!", "You clicked the button!", "success");


   }else if ($(this).val().length =0 && $(this).val().length <10){
     $("#btnNextin").addClass("disabled");

    }else {
      $("#btnNextup").addClass("disabled");
      //console.log("bbbbnj");

    }

  });
      console.log("a");
    });
