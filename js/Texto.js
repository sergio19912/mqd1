/*Documento de js que altera el comportamiento del texto de las distintas secciones de la web*/

$(document).ready(function(){
    
    
     //sacamos el tamaño
    var tamañoActual = $(".texto").css("font-size");
    
    //comvertimos el numero
    var tamañoFuenteNum = parseInt(tamañoActual);
    
    function colorearBotones(){
        
        //pintamos y editamos los btn
    if(tamañoFuenteNum==18){
        
        
        $("#minFuente a").css("color","#00539e");
        $("#minFuente a").attr("aria-label","Botón disminuir fuente bloqueado");
    }else{
        
         $("#maxFuente a").css("color","white");
        $("#mxFuente a").attr("aria-label","Botón disminuir fuente");
        
        
    }
        
      if(tamañoFuenteNum==22){
       
     
        
        $("#maxFuente a").css("color","#00539e");
         
        $("#maxFuente a").attr("aria-label","Botón aumentar fuente bloqueado");
        
    }else{
        
        
         $("#minFuente a").css("color","white");
         
        $("#minFuente a").attr("aria-label","Botón aumentar fuente");
        
    }
    
    
    };
    
         //cuando se muestra el contenido oculto y cambiamos el texto
          $("section .collapse").on('show.bs.collapse', function(){
              
              //sacamos el atributo del hermano mayor
             var enlace = $(this).siblings("a").text("Ocultar texto");
              
              //cambiamos el contenido del atributo area-label
              $("a").attr("aria-label" ,"pulsar para ocultar el texto");
              
      
    });

    //cuando se oculta el contenido
     $("section .collapse").on('hide.bs.collapse', function(){
              
              //sacamos el atributo del hermano mayor y cambiamos el texto
             $(this).siblings("a").text("Mostrar mas");
         
             //cambiamos el contenido del atributo area-label
              $("a").attr("aria-label", "pulsar para mostrar mas");
      
    });
    
   
//pulsar maxFuente
$("#maxFuente").click(function(){
    
    
    //controlamos el tamaño maximo
    if(tamañoFuenteNum<22){
        
        //aumentamos el tamaño de la letra
         tamañoFuenteNum=tamañoFuenteNum+2;
      
        //ejecutamos la opcion
         $(".texto").css("font-size",tamañoFuenteNum+"px");
        
        alert(tamañoFuenteNum);
        
        colorearBotones();
        
        
        
        
    }
    
 
});
    
    
    
    


//pulsar minFuente
$("#minFuente").click(function(){
    
    
   

    
    //controlamos el tamaño maximo
    if(tamañoFuenteNum>16){
        
        
        //aumentamos el tamaño de la letra
         tamañoFuenteNum=tamañoFuenteNum-2;
      
        //ejecutamos la opcion
         $(".texto").css("font-size",tamañoFuenteNum+"px");
        

         colorearBotones();
        
    }
    
    
    
});
    
    
    






    
    
    
    
});