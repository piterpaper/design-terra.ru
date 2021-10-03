$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()

        }).done(function() {
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.")
        });
        return false;
    });

});

function check() {
    let submit = document.getElementsByName('submit')[0];
    if (document.getElementById('politics').checked)
        submit.disabled = '';
    else
        submit.disabled = 'disabled';
};