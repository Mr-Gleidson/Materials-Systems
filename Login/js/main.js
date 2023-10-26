(function ($) {
    "use strict";

    function focusInput() {
        $('.input100').each(function () {
            $(this).on('blur', function () {
                if ($(this).val().trim() !== "") {
                    $(this).addClass('has-val');
                } else {
                    $(this).removeClass('has-val');
                }
            });
        });
    }

    function validateForm() {
        var input = $('.validate-input .input100');
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (!validate(input[i])) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    }

    function validate(input) {
        if ($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
                return false;
            }
        } else {
            if ($(input).val().trim() === '') {
                return false;
            }
        }
        return true;
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }

    function togglePasswordVisibility() {
        var showPass = 0;
        $('.btn-show-pass').on('click', function () {
            var passwordInput = $(this).next('input');
            if (showPass === 0) {
                passwordInput.attr('type', 'text');
                $(this).addClass('active');
                showPass = 1;
            } else {
                passwordInput.attr('type', 'password');
                $(this).removeClass('active');
                showPass = 0;
            }
        });
    }

    // Inicialização
    focusInput();

    $('.validate-form').on('submit', function () {
        return validateForm();
    });

    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    togglePasswordVisibility();

})(jQuery);