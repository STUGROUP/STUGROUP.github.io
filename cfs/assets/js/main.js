function postToGoogle() {
	alert('success');
	var mess = $("#messField").val();
	var image = $("#imageField").val();

	$.ajax({
		url: "https://docs.google.com/forms/d/e/1FAIpQLSekzB82oErln-sfRBY06YN-4FzD_thuXOfUXbU8ifY3-wXq5Q/formResponse?",
		data: {"entry.693674214": mess, "entry.376594257": image},
		type: "POST",
		dataType: "jsonp",
		success: function(d)
	{},
		error: function(x, y, z) {
			$('#success-msg').show();
		}
	});

	return false;
}