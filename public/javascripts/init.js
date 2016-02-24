$(document).ready(function(){
       $("nav a").click(function(evn){
            evn.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash); 
        });
        

        $('#portfolioContainer img').click(function(){
            alert('tacos');
            (this).css("color","blue");
        })
        
   
    });