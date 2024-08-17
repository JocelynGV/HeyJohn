$(document).ready(function() {
    let currentWordIndex = 0;
            const $words = $('#h1Append span');

            $('#revealButton').click(function() {
                if (currentWordIndex < $words.length) {
                    $words.eq(currentWordIndex).addClass('show');
                    currentWordIndex++;
                } else if (currentWordIndex >= $words.length) {
                    $('#h1Append').append('<span class="show">u</span>');
                    currentWordIndex++;
                }
            });
})