document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.btn.confirmation').forEach((button) => {
		button.addEventListener('click', function(event) { 
			event.preventDefault(); 
			
			if (confirm(M.util.get_string('confirm_enrol', 'enrol_apply'))) {
				button.closest('form').submit(); 
			} 
		}); 
	}); 
});
