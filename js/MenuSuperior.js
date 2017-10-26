/*

Documento en el que se trata la funcionalidad del menu superior.

*/

$(document).ready(function(){
    
    
    var $w = $(window);
    var wh = $w.height();
    var h = $('body').height();
    var sHeight = h - wh;
    $w.on('scroll', function(){
        var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
        
        
        
        var prog = Math.round(perc * 100);
        
        //actualizamos el valor del width de la barra
         $("#barProgeso").css("width",prog+"%");   
        
        //texto de la barra
         $("#barProgeso").html(prog+"% completado");
        
        //actualizamos el span
         $("#barProgeso span").html(prog+"% completado");
        
        //cerramos el menu al hacer escroll
           
        $('.navbar-collapse').collapse('hide');
        
        
        
        //color de la barra
         $("#barProgeso").css("color","black");
        
        //al llegar al 90% lo ponemos en rojo
        if(prog>=90){
            
         $("#barProgeso").css("background-color","red");   
            
               $('#flecha').fadeIn(300);
        
            
        }else{
            
            $('#flecha').fadeOut(300);
            
             $("#barProgeso").css("background-color","#ffed02"); 
            
        }
        
        /*animacio de la sombra*/
        if(prog>=8){
            
            $('header').css('box-shadow','1px 15px 7px -9px rgba(0,0,0,0.35)');
            
        }else{
            
         
            
            
             $('header').css('box-shadow','');
        }
        
        
       
        
    });
    
    //Al pulsar sobre la flecha
    $("#flecha").click(function(){
        //animacion
       $("body").animatescroll({scrollSpeed:2000,easing:'easeOutSine'});

        
    });
    
    
    //Al pulsar sobre item venus..
    $("#linkVenus").click(function(){
        //animacion
       $("#secVenus").animatescroll({scrollSpeed:2000,easing:'easeOutSine'});

        
    });
    
    //Al pulsar sobre item Gioconda..
    $("#linkGio").click(function(){
        //animacion
       $("#secGioconda").animatescroll({scrollSpeed:2000,easing:'easeOutSine',padding:"-10"});

        
    });
    
    //Al pulsar sobre item venus..
    $("#linkScriba").click(function(){
        //animacion
       $("#secEscriba").animatescroll({scrollSpeed:2000,easing:'easeOutSine'});

        
    });
    
    
    
    
    
       
    
    
});