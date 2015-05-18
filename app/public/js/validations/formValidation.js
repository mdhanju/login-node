$(document).ready(function() {
    $("#userId").focus();
    $('#signIn, #login-form input#password').attr('disabled', 'disabled');
    // $('#signIn, #login-form input#password').each(function(){
    //  $(this).attr('disabled', 'disabled');
    // })

    $("input.main").keypress(function() {
        var empty = false;
        $('form#login-form >  input.main').each(function() {
            // console.log($(this).val());
            if ($(this).val() == '') {
                empty = true;
            }
        });
        if (!empty) $('#signIn').removeAttr('disabled');
    });

    var typingTimer;
    var doneTypeInt = 500; // 0.5 sec

    //on keyup, start the countdown
    $('#userId').keyup(function() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypeInt);
    });

    //on keydown, clear the countdown 
    $('#userId').keydown(function() {
        clearTimeout(typingTimer);
    });

    //user is "finished typing," do something
    function doneTyping() {
        console.log(" Done with typing need to activate validate user and activate password")
        var userName = $('#userId').val();
        //TODO :- Need to validate user with backend
        validateUser(userName, function(result) {
            console.log("VALUE === " + result)
            if (result) {
                $('#password').removeAttr('disabled');
                $('#invalidUser').text("");
                $('#userId').removeClass('error')
            } else {
                console.log(" Invalid User ")
                $('#userId').addClass('error')
                $('#invalidUser').text("Invalid User - Please check you user")
                $('#login-form input#password').attr('disabled', 'disabled');
            }
        })

    };

    function validateUser(user, callback) {
        console.log("User to validate == " + user)
        if (user === "test@mail.com") {
            callback(true)
        } else {
            callback(false)
        }
    }

});
