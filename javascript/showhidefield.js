(function($) {
	$('.showhide select').livequery(function() {
		var select = $(this);

		select.change(function() {
			var selectVal = select.val();
			$('option', this).each(function() {
				var field = $('#'+this.value);
				
				if (field.length == 1) {
					if (this.value == selectVal) {
						field.css('display', 'block');
					} else {
						field.css('display', 'none');
					}
				}
			});
		});
		
		select.trigger('change');
		
	});
})(jQuery);