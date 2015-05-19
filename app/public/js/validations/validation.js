$(document).ready(function() {
    // $("#userId").focus();
    $('.btn').attr('disabled', 'disabled');

    $("input#resetPasswordEmail").keypress(function() {
        console.log("Typing on lost pass modal")
        var empty = false
        $('form#lostPassword >  input').each(function() {
            // console.log($(this).val());
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (!empty) $('#resetPasswordButton').removeAttr('disabled');
    })

    // registerUser
    $("#registerUser input").keypress(function() {
            console.log("Typing on register user modal")
            var empty = false
            $('form#registerUser >  input').each(function() {
                // console.log($(this).val());
                if ($(this).val() == '') {
                    empty = true;
                }
            });
            if (!empty) $('#registerUser button').removeAttr('disabled');
        })
  
})
