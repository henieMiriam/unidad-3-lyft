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
     $("#btnNextup").removeAttr("disabled");

    }else if ($(this).val().length >0 && $(this).val().length <=10){
    //  $("#btnNextin").attr("disabled");

    }else {
      $("#btnNextup").attr("disabled");
      console.log("bbbbnj");

    }

  });
   console.log("a");
    });
