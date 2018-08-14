document.addEventListener("DOMContentLoaded", function () {
    $(function () {
        var sliders = $(".slider");

        sliders.each(function () {
            value = Number($(this).text(), 10);

            $(this).empty().slider({
                value: 0,
                min: 0,
                max: 1000,
                step: 10,
                animate: 100,
                slide: function (event, ui) {
                    $(this).siblings(".slider-value").attr("value", ui.value);
                    $(this).siblings(".slider-value").trigger("change");
                }
            });
        });

        $(".slider-value").change(function () {
            $(".slider-value").each(function () {
                var sliderVal = Number($(this).prop("value"));
                $(this).siblings(".slider").slider("option", "value", sliderVal);
            });
        });
    });
});