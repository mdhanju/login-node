$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'right'
    });

    $('#verifyEmail').click(function() {
        $email = $('#emailToRegister').val();
        console.log("USER EMAIL = " + $email);
        $.post("/authorizeEmail", {
            email: $email
        }, function(data) {
            if (data) {
                $('.authorizeStatusMess').addClass('success')
                $('.authorizeStatusMess').text('Email send sucessfull')
            } else {
                $('.authorizeStatusMess').addClass('fail')
                $('.authorizeStatusMess').text('Email send unsucessfull')
            }
        })
    });

    $('*[name=verification]').focusout(function() {
        $userCode = $(this).val();

        $.post("/verifyCode", {
            userCode: $userCode
        }, function(data) {
            if (data) {
                $('.authorizeStatusMess').addClass('success')
                $('.authorizeStatusMess').text('Valid Code !!')
            } else {
                $('.authorizeStatusMess').addClass('fail')
                $('.authorizeStatusMess').text('Invalid Code ')
            }
        })
    });

})
