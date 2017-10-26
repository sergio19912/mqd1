 $(document).ready(function () {

     //pulsacion de btn que despliega el menu
     $('#sidebarCollapse').on('click', function () {

         //comprobamos la clase que tiene el menu

         var clase = $('#sidebar').attr("class");

         //si la clase  es inactive
         if (clase == "inactive") {
             


             //borramos la clase inactive
             $('#sidebar').removeClass("inactive");

             //insertamos la clase active
             $('#sidebar').addClass("active");
             
            
              $('video').fadeIn(300);


         } else {

             //borramos la clase active
             $('#sidebar').removeClass("active");

             //insertamos la clase active
             $('#sidebar').addClass("inactive");
             
              $('video').fadeOut(300);

             



         }


     });




     var contadorContraste = 1;

     //opción alto contraste
     //cuando se hace clik en #btn-contraste
     $("#btn-altoContraste").on('click', function () {



         //comprobamos que se ha marcado     
         if (contadorContraste == 1) {

             //actualizamos 
             contadorContraste = 0;

             //cargamos la pagina css de alto contraste

             $("#contraste").attr("href", "./css/altoContraste.css");

             //cambiamos el color del btn
             $("#btn-altoContraste").css("color", "#00539e");

             //cambiamos la etiqueta aria-label(Activo)
             $("#btn-altoContraste").attr("aria-label", "Botón Alto Contrate Activado");





         } else {

             //actualizamos 
             contadorContraste = 1;


             //si esta desmarcado borramos el enlace
             $("#contraste").attr("href", "");

             //cambiamos el color del btn
             $("#btn-altoContraste").css("color", "white");

             //cambiamos la etiqueta aria-label(Activo)
             $("#btn-altoContraste").attr("aria-label", "Botón Alto Contrate desactivado");

         }
     });

     //mostramos la ventana modal soló una vez
     var contadorVentana = 0;

     //registramos el pulso sobre el btn
     $("#sidebarCollapse").click(function () {

             if (contadorVentana != 1) {

                 //incrementamos el contador
                 contadorVentana = 1;
             } else {

                 //cambiamos los atrbutos del btn encuento a la ventana modal
                 $(this).attr("data-target", "");

             }

         }

     );







 });
