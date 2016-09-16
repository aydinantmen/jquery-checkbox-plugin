$(document).ready(function() {
    $(':checkbox').each(function() {
        var x = $('<input>').attr({type:'hidden',name:this.name,value:'0'});
        $(this).after(x);
        $(this).click(function() {
            $(this).is(':checked') ? x.remove() : $(this).after(x);
        });
    });
});
