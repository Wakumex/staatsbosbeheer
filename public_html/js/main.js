   $(function () {
            $('.dropdown-menu input').click(function (event) {
                event.stopPropagation();
            });
        });
        
$('#nav').affix({
    offset: { top: $('#nav').offset().top }
});
