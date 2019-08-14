$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
       $(this).remove();
	});
	event.stopPropagation();
});

$("input").on("keypress",function(event){
	if(event.which === 13)
	{
		var enteredtext = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+enteredtext+"</li>")
	}
});