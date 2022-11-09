$(function() {
// Menú Animación
    $('#irRaiz').click(function(){
        $(this).toggleClass('active');
        $('#irMeta').removeClass("active");
        $('#irSection').removeClass("active");
        $('#irAgrupar').removeClass("active");
        $('#irSemantica').removeClass("active");
        $('#irIncrustado').removeClass("active");
        $('#irTablas').removeClass("active"); 
        $('#irFormularios').removeClass("active"); 

        $('html,body').animate({
            scrollTop: $("#raiz").offset().top},
        'slow');
    });
    $('#irMeta').click(function(){
        $(this).toggleClass('active');
        $('#irRaiz').removeClass("active");
        $('#irSection').removeClass("active");
        $('#irAgrupar').removeClass("active");
        $('#irSemantica').removeClass("active");
        $('#irIncrustado').removeClass("active");
        $('#irTablas').removeClass("active"); 
        $('#irFormularios').removeClass("active"); 

        $('html,body').animate({
            scrollTop: $("#metadatos").offset().top - 650},
        'slow');
        console.log('entro');
    });
    $('#irSection').click(function(){
        $(this).toggleClass('active');
        $('#irMeta').removeClass("active");
        $('#irRaiz').removeClass("active");
        $('#irAgrupar').removeClass("active");
        $('#irSemantica').removeClass("active");
        $('#irIncrustado').removeClass("active");
        $('#irTablas').removeClass("active"); 
        $('#irFormularios').removeClass("active"); 

        $('html,body').animate({
            scrollTop: $("#section").offset().top - 50},
        'slow');
    });
    $('#irAgrupar').click(function(){
        $(this).toggleClass('active');
        $('#irMeta').removeClass("active");
        $('#irSection').removeClass("active");
        $('#irRaiz').removeClass("active");
        $('#irSemantica').removeClass("active");
        $('#irIncrustado').removeClass("active");
        $('#irTablas').removeClass("active"); 
        $('#irFormularios').removeClass("active"); 

        $('html,body').animate({
            scrollTop: $("#agrupar").offset().top - 50},
        'slow');
    });
    $('#irSemantica').click(function(){
        $(this).toggleClass('active');
        $('#irMeta').removeClass("active");
        $('#irSection').removeClass("active");
        $('#irAgrupar').removeClass("active");
        $('#irRaiz').removeClass("active");
        $('#irIncrustado').removeClass("active");
        $('#irTablas').removeClass("active"); 
        $('#irFormularios').removeClass("active"); 

        $('html,body').animate({
            scrollTop: $("#semantica").offset().top - 50},
        'slow');
    });
    $('#irIncrustado').click(function(){
        $(this).toggleClass('active');
        $('#irMeta').removeClass("active");
        $('#irSection').removeClass("active");
        $('#irAgrupar').removeClass("active");
        $('#irSemantica').removeClass("active");
        $('#irRaiz').removeClass("active");
        $('#irTablas').removeClass("active"); 
        $('#irFormularios').removeClass("active"); 

        $('html,body').animate({
            scrollTop: $("#incrustado").offset().top - 50},
        'slow');
    });
    $('#irTablas').click(function(){
        $(this).toggleClass('active');
        $('#irMeta').removeClass("active");
        $('#irSection').removeClass("active");
        $('#irAgrupar').removeClass("active");
        $('#irSemantica').removeClass("active");
        $('#irIncrustado').removeClass("active");
        $('#irRaiz').removeClass("active"); 
        $('#irFormularios').removeClass("active"); 

        $('html,body').animate({
            scrollTop: $("#tablas").offset().top - 50},
        'slow');
    });
    $('#irFormularios').click(function(){
        $(this).toggleClass('active');
        $('#irMeta').removeClass("active");
        $('#irSection').removeClass("active");
        $('#irAgrupar').removeClass("active");
        $('#irSemantica').removeClass("active");
        $('#irIncrustado').removeClass("active");
        $('#irTablas').removeClass("active"); 
        $('#irRaiz').removeClass("active"); 

        $('html,body').animate({
            scrollTop: $("#formularios").offset().top - 50},
        'slow');
    });
    
});