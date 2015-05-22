$(document).ready(function() {
    $("#lostPassword").submit(function(e) {
        $frm = $(this);
        $email = $frm.find('*[name=email]').val();
        console.log(" Email = " + $email);
        /*$.post('/validateEmail', {
    email: $email
}, function(data) {
    if (data == true) // email registered
    else // email not registered
})
*/
        $ajax_container = $(this);
        $ajax_container.hide();
        $.post("/resetPassword", {
            email: $email
        }, function(data) {
            console.log(data);
            $ajax_container.html("Please check your email for reset password instructions. ");
            $ajax_container.slideDown('slow');
        })
        e.preventDefault();
    });

        $("#registerUser").submit(function(e) {
        $frm = $(this);
        $firstName = $frm.find('*[name=firstName]').val();
        $lastName = $frm.find('*[name=lastName]').val();
        $email = $frm.find('*[name=email]').val();
        $gender = $frm.find('*[name=gender]').val();
        $password = $frm.find('*[name=password]').val();
        $confirmPassword = $frm.find('*[name=confirmPassword]').val();
        $termCon = $frm.find('*[name=termCon]').val();


        $ajax_container = $(this);
        $ajax_container.hide();
        $.post("/registerUser", {
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            gender: $gender,
            password: $password,
            termCon: $termCon
        }, function(data) {
            $ajax_container.html("Congrats !!  " + $firstName + " " + $lastName);
            $ajax_container.slideDown('slow');
        })
        e.preventDefault();
        });
})
