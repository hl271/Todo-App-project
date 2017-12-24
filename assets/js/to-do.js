$('.todo-features').css('display', 'none');
//Toggle the todo features
$('.todo-feature-open').on('click', function(){
	$(this).next().animate({
			width: 'toggle'
	});
});

//Delete feature added
$('.glyphicon-trash').click(function(){
	$(this).parent().parent().fadeOut(500, function(){
			$(this).remove();
	});

});
//Complete feature added
$('.glyphicon-ok').click(function(){
	$(this).parent().prev().prev().toggleClass('completed-content');
	$(this).toggleClass('completed');
});
//Stared feature added
$('.glyphicon-star').click(function(){
	let currentTodo = $(this).parent().parent();
	$(this).toggleClass('stared');
	currentTodo.toggleClass('stared-content');
	currentTodo.insertBefore($('.list-display').children().first());
});


function refreshApp(){
		let newTodo = $('.list-display').children().last();
		let newTodoFeatures = newTodo.children().last();
		let newTodoFeatureOpen = newTodoFeatures.prev();
		let glyphTrash = newTodoFeatures.children().first();
		let glyphOk = glyphTrash.next();
		let glyphStar = glyphOk.next();
		newTodoFeatures.css('display', 'none');
		newTodoFeatureOpen.on('click', function(){
				$(this).next().animate({
						width: 'toggle'
				});
		});

		glyphTrash.click(function(){
				$(this).parent().parent().fadeOut(500, function(){
						$(this).remove();
				});

		});

		glyphOk.click(function(){
				$(this).parent().prev().prev().toggleClass('completed-content');
				$(this).toggleClass('completed');
		});

		glyphStar.click(function(){
				$(this).toggleClass('stared');
				newTodo.toggleClass('stared-content');
				newTodo.insertBefore($('.list-display').children().first());
		});
}

//Add new to do
$('input[name="Add to do"]').on('keypress', function(event){
		if (event.which === 13){
				let todoText = $(this).val();
				$(this).val("");
				$('.list-display').append(
						"<div class=\"panel panel-default\">\n" +
						"          <div class=\"panel-body\">"+ todoText+"</div>\n" +
						"          <span class=\"glyphicon glyphicon-align-justify todo-feature-open\"></span>\n" +
						"          <div class=\"todo-features\">\n" +
						"            <span class=\"glyphicon glyphicon-trash\"></span>\n" +
						"            <span class=\"glyphicon glyphicon-ok\"></span>\n" +
						"            <span class=\"glyphicon glyphicon-star\"></span>\n" +
						"          </div>\n" +
						"        </div>"
				);
				refreshApp();
		}
});

//Toggle the forms
$('.glyphicon-th-list').click(function(){
		$('.forms').toggle();
});

$('input[name="Search to do"]').on("keyup", function() {
		let value = $(this).val().toLowerCase();
		$(".panel").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
});




