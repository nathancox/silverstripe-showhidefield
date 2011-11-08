(function($) {
	$('.showhide select').livequery(function() {
		var select = $(this);

		select.change(function() {
			var selectVal = select.val();
			$('option', this).each(function() {
				var value = this.value;
				if (value != '') {
					var field = $('#'+value);
										
					if (field.length == 0) {
						field = $('#'+value + 'ID');
					}
					
					if (field.length == 1) {
						if (value == selectVal) {
							field.css('display', 'block');
						} else {
							field.css('display', 'none');
						}
					}
				}
			});
		});
		
		select.trigger('change');
		
	});
	
	
	$('.optionsetshowhide input').livequery(function() {
		var input = $(this);

		input.change(function() {
			var selectedVal = input.val();
			var options = $('input', $(this).parents('.optionsetshowhide'));
			
			$(options).each(function() {
				var value = this.value;
				if (value != '') {
					var field = $('#'+value);
										
					if (field.length == 0) {
						field = $('#'+value + 'ID');
					}
					
					if (field.length == 1) {
						if (value == selectedVal) {
							field.css('display', 'block');
						} else {
							field.css('display', 'none');
						}
					}
				}
			});
		});
		
		input.trigger('change');
		
	});
	
})(jQuery);