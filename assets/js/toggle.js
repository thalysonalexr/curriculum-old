// Togle in navbar do bootstrap

$(document).ready( function() {

	$('#navbar').click( function() {

		if (!$('#navbarToggleExternalContent').is(':visible')) {
			$(this).removeClass('collapsed');
			$('#navbarToggleExternalContent').slideDown();
		} else {
			$('#navbarToggleExternalContent').slideUp();
			$(this).addClass('collapsed');
		}
	});
});