$(document).ready( function() {

	$('#prompt input').focus();
	
	$('#nav a').click( function() {
		getContent(event.target.id);
	});
	
	$('#prompt form').submit( function() {
		commandEntered($('#prompt form input').val());
		return false;
	});

});

function getContent(id)
{
	var content = $('li#' + id).html();
	$('ul#shell li:last-child').before('<li class="history">$ ' + id + '</li>')
	
	if ($('li#' + id).length) {
		$('ul#shell li:last-child').before('<li>' + content + '</li>');
		$('#prompt input').val('');
	} else {
		$('ul#shell li:last-child').before('<li>Command not understood.</li>');
	}
	
	$('#prompt').ScrollTo();
}

function commandEntered(command)
{
	getContent(command);
}
