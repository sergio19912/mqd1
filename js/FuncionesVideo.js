 $(document).ready(function(){

//tiempo en el que esta el video
var posActualVideo =  $("video").prop("currentTime");
     
//vol actual
 volActual =$("video").prop("volume");
     

   //lista de reproduccion
            var pista ="";
           
            
             //array que almacena la direccion de  video
         dirVideo = ["videos/07_Ba%C3%B1ista%20tendida_SUB.mp4",
                        "videos/10_Busto%20de%20mujer%20con%20los%20brazos%20cruzados_SUB.mp4",
                        "videos/11_Cabeza%20de%20toro_SUB.mp4"]; 
            
            
            //variable que nos marca la pista actual
            contador =0;
    
    
    //variable que nos marca el numero de pistas
            numPistas =0;
            numPistas =dirVideo.length;

//variable que nos ayuda a saber si el video ha sido reproducido
           var rep =0;
     
     

    //al pulsar el btn play lo ponemos en reproduccion (correcto)
       $("#btn-play").click(function(){
    
        //al reproducirse el video
           
           if( $("video")[0].paused){
               
      
                $("#btn-play i").attr("class","fa fa-pause-circle-o fa-2x");
               $("#btn-play").attr("aria-label","botón pausa");
               //si el contador es igual a cero
               if(rep==0){
                   
             //actualizmos el contador      
            rep++;    
                   
            //seleccionamos la lista que queremos reproducir
            track =  dirVideo[contador];
           
             //cambiamos el atributo src del source
                $("source").attr("src",track);
                
              //cargando el video
             $("video")[0].load();
           
            $("video").trigger("play");
                   
                 
       
               }if(rep=1){
                   
           
            $("video").trigger("play");
                   
               }
           }else{
               
             
               
                $("#btn-play i").attr("class","fa fa-play-circle-o fa-2x");
               
                $("#btn-play").attr("aria-label","botón play");
               
               $("video").trigger("pause");
 
           }

       });
     
     //pulsar en siguiente
         $("#btn-siguiente").click(function(){
             
             
              
             /*comprobamos el valor de la variable contador,
             tiene que estar dentro de los margenes correctos 
             */
             
              
             if(contador<(numPistas-1)){
                 
                //aumentamos la variabla contador
                contador++;
                
                 //seleccionamos la lista que queremos reproducir
                 track =  dirVideo[contador];
                 
                  //cargamos los subtitulos
                //cargarSubtitulos();
           
             //cambiamos el atributo src del source
                $("source").attr("src",track);
                 
        
                
              //cargando el video
             $("video")[0].load();
           
            //producimos el video
            $("video").trigger("play");
                 
                
    
                } 
             
             colorearBotones();
           
         });
     
      //boton anterior
         $("#btn-anterior").click(function(){
             
    
             
             /*el boton sera usable mientras
             contador sea soperior a 0*/
             
             if(contador>0){
                 
            //decrementamos la variable
             contador--;
                 
                 //seleccionamos la lista que queremos reproducir
                 track =  dirVideo[contador];
                 
                  //cargamos los subtitulos
                //cargarSubtitulos();
           
             //cambiamos el atributo src del source
                $("source").attr("src",track);
                
              //cargando el video
             $("video")[0].load();
                 
             //cargamos los subtitulos
            //cargarSubtitulos();
           
            //reproducimos el video
            $("video").trigger("play");
                 
                 
             }
       
             colorearBotones();

             
             
         });


     
     
     
     //al pulsar sobre el btn progreso(correcto)
    $("#btn-progreso").click(function(){
        
        
        
       //posocion de video
      var posActualVideo =  $("video").prop("currentTime");
        
        //auemtamos el tiempo del  video 20s
        posActualVideo =posActualVideo+20;
        
        //actualizamos el tiempos
        $("video").prop("currentTime",posActualVideo);
        

        
    });

     //al pulsar sobre el btn retroceso (correcto)
    $("#btn-retroceso").click(function(){
        
        
        
       //posocion de video
      var posActualVideo =  $("video").prop("currentTime");
        
        //restamos  al tiempo del  video 20s
        posActualVideo =posActualVideo-20;
        
        //actualizamos el tiempos
        $("video").prop("currentTime",posActualVideo);
        

        
    });
     
     
     function colorearBotones(){
            
            
        
            //btn anterior
             if(contador==0){
                
                 //pongo de color el btn
                 $("#btn-anterior").css("color","#00539e");
                 
                 //cambiamos el attr aria label(btn bloqueado)
                 $("#btn-anterior").attr("aria-label","botón pista anterior bloqueado");
                 
                 
             }else{
                 
                  $("#btn-anterior").css("color","white");
                  $("#btn-anterior").attr("aria-label","botón pista anterior");
                 
             }
            //btn siguiente
           
            if(contador==(numPistas-1)){
                
                 $("#btn-siguiente").css("color","#00539e");
                  $("#btn-siguiente").attr("aria-label","botón pista siguiente bloqueado");
                
            }else{
              
                 $("#btn-siguiente").css("color","white");
                  $("#btn-siguiente").attr("aria-label","botón pista siguiente");
            }
            
            
        };

    
    
     
   
   //si el volumen es igual a cero(correcto)
    $("video").on("volumechange",function(){
        
        
        
    
        
        if(volActual<=0 ){
            
            
              
            //cambiamos el color del texto al rojo
         $("#btn-mute").css("color","#00539e");
            
        //ponemos el btn en rojo
             $("#btn-volmin  i").css("color","#00539e");
              $("#btn-volmin").attr("aria-label","botón bajar volumen bloqueado");
            
        }else if(volActual==1){
            
            
            
            
            //ponemos el btn en rojo
             $("#btn-volmax  i").css("color","#00539e");
             $("#btn-volmax").attr("aria-label","botón subir volumen bloqueado");
        }
        
        if(volActual>0 && volActual<1){
            
                  
            //cambiamos el color del texto al rojo
         $("#btn-mute").css("color","white");
            
        //ponemos el btn en rojo
             $("#btn-volmin  i").css("color","white");
            
              
            //ponemos el btn en rojo
             $("#btn-volmax  i").css("color","white");
            
            
        }
        
        if(volActual==0){
            
            //ponemos el btn en rojo
             $("#btn-volmax  i").css("color","white");
              $("#btn-volmin").attr("aria-label","botón mute bloqueado");
            
            
        }
        
        
        
         
        
        
    
    });
     
  
        //al pulsar en mute(correcto)
     $("#btn-mute").click(function(){
         
        $("video").prop("volume",0);
         
         
       
     });
     
     
     //al pulsar sobre volmin (correcto)
     $("#btn-volmin").click(function(){
         
       if(volActual>0){
         
         volActual=volActual-0.50;
         
        $("video").prop("volume",volActual);
           
       }
         
       
     });
     
     
      //al pulsar sobre vol+ (correcto)
     $("#btn-volmax").click(function(){
         
        if(volActual<1){
        
         volActual= volActual+0.50;
        $("video").prop("volume",volActual);
             
     }
         
       
     });
     
     
       var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

        //boton de pantalla completa
        $("#btn-expnadir").click(function(){
            
            
              if(isChrome){
            
            //ponemos el video en pantalla completa
             $("video")[0].webkitEnterFullScreen();
                
            }
            
            if(isFirefox){
                
                //ponemos el video en pantalla completa
                $("video")[0].mozRequestFullScreen();
                
            }
            
           
            
            
             
            
        });
     /*
      //al pulsar sobre uno de los items de la lista
            $("#sidebar li").click(function(){
                
                
                //sacamos el id del item
                
               var id = $(this).attr("id");
                
                //alert(id);
               
                //dependiendo de id guardamos el id
                if(id=="p3"){
                    
                    contador=2;
                  //guardamos en pista la ubicacion del video que hemos pulsado
                    pista = dirVideo[contador];
                    //alert(pista);
                    
                }else if(id=="p2"){
                    
                    contador=1;
                    
                  //guardamos en pista la ubicacion del video que hemos pulsado
                    pista = dirVideo[contador];
                   // alert(pista);
                    
                }else if(id=="p1"){
                    
                    contador=0;
                    
                  //guardamos en pista la ubicacion del video que hemos pulsado
                    pista = dirVideo[contador];
                    
                }
                
                //cambiamos el atributo src del source
                $("source").attr("src",pista);
                
                
                
              //cargando el video
             $("video")[0].load();
                
                
                
                
                
                //ponemos en marchar el reproductor (dandole un evento)
                $("video").trigger("play");
                
                
            });
            
    
            */
     
     });//fin del documento
            
    