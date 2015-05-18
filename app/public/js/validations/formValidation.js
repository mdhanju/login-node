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
        var reqData = "key=" + userName;
        //TODO :- Need to validate user with backend
        $.get('/validateUser', reqData, function(data) {
            console.log("DATA from server =  " + data)
            if (data) {
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
    }
})
