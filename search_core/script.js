$(document).ready(function() {
		$('.listenr-header').hide();
		$('.listenr-header').fadeIn(2000);
		$('.text-field').hide();
		$('.text-field').fadeIn(2000);
		$('.social-button').hide();
});


$('.text-field').keypress(function(e) {
    if(e.which == 13) {
        $(this).fadeIn(1000);
        $('.social-button').fadeIn(1000);
    }
});


// web intent, tweeting
$(document).ready(function() {
  $('.buttonTweet').on('click', function(event) {
    event.preventDefault();
    
   	var msg = $('.text-field').val();
    var shareUrl = 'https://twitter.com/intent/tweet?text=' + msg + ' via Core Collector';
    
	  window.open(shareUrl);
  });
});

