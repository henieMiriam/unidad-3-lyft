 # UNIDAD 3: AGILIZA TU DESARROLLO
 ## Reto replicando **LyftT**

 ** Objetivo curricular se debe: **
* Aplicar los conocimientos adquiridos en los springs anteriores y asta el momento sobre maquetacion en HTML asi como CSS Y JS.
* Aplicar los conocimientos adquiridos en este sprig :

  * UNIDAD 1: LA WEB DESDE UN MÓVIL
    * Grid sistem
    * Media queries y viewport
    * Responsive Web desing
  * UNIDAD 2: NO REINVENTES LA RUEDA
    * Frameworks
  * UNIDAD 3: AGILIZA TU DESARROLLO
    * JQUERY
    * DOM
    * EVENTOS

**Requerimientos**

_Desarrolla una web-app que replique el sitio de Lyft, en este reto deberás cumplir los pasos necesarios para que tu usuario pueda registrarse._

**FLUJO DE LA APLICACIÓN**
Vista splash con duración de 2 a 5 segundos que redirecciona a tu vista de inicio. La vista de inicio cuenta con dos botones, en esta ocasión seguiremos el flujo de SING UP.
![inicio](assets/images/splash.png)

En la siguiente vista tenemos un formulario donde nuestro usuario puede escoger el país y debe ingresar su número de teléfono. El botón de NEXT debe estar deshabilitado hasta que se ingrese un número de 10 dígitos.
![registro](assets/images/login.jpg)

Una vez ingresado el número de teléfono se habilita el botón y al dar click debe enviar una alerta con un código generado aleatoriamente (LAB-000) y redireccionar a la siguiente vista.
![codigo](assets/images/singup.jpg)

En esta vista se debe ingresar el código dado anteriormente y una vez hecho esto se habilita el botón que redirecciona a nuestro usuario a la vista donde ingresa sus datos. (Puede tener la opción de enviar otro código.)
![verificacion](assets/images/verify.jpg)
Para ingresar sus datos necesitamos un formulario que le pida su nombre, apellido y correo electrónico. Deberá también tener un checkbox para que se acepten los términos y condiciones del servicio.
![datos](assets/images/join.png)

Ya que se ha realizado lo anterior, sólo se deberá mostrar una vista al usuario que le indique que ha concluido con el registro exitosamente.
![verificado](assets/images/last.png)

NOTA: Todas nuestras vistas deben de contar con una manera de regresar a la vista anterior
