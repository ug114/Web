document.addEventListener("DOMContentLoaded", function(){
    $( function() {
        $(".slider").slider({
            min: 0,
            max: 1000,
            step: 10,
            value: 0,
            animate:"slow",
            orientation: "horizontal",
            //create: displaySliderValue,
            //slide: displaySliderValue
            slide: function(event, ui) {
                //$(".slider-value").html(ui.value);
                $('.slider-value').val(ui.value).trigger("change");
            },

            change: function(event, ui) { 
            	$('.slider-value').val(ui.value).trigger("change");
            }
        });

        // var sliders = $('.slider');

        // sliders.each(function() {
        //     $parent = $(this).parent(),
        //     //$parent.find('.slider-value')[0].val($(this).value);  
            
        // });

        // function displaySliderValue (event, ui) {
        //     $(".slider").next(".slider-value").text(ui.value);
        // }       
        
        // displaySliderValue() {
        //     var value = $(".slider").slider("value");
        //     $(".slider").next(".slider-value").text(value);
        //     $(".slider-value").text(value);
        // }
    });	 
})