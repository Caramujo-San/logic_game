document.addEventListener('DOMContentLoaded', function()
{
        $("#password").keyup(function()
        {
            // strngth password code based in Martech Zone's Douglas Karr
            var strength = document.getElementById('strength');

            var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");

            var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");

            var enoughRegex = new RegExp("(?=.{8,}).*", "g");

            var pwd = document.getElementById("password");

            if (pwd.value.length == 0)
            {
                strength.innerHTML = 'Type Password';
            }
            else if (false == enoughRegex.test(pwd.value))
            {
                strength.innerHTML = 'More Characters';
            }
            else if (strongRegex.test(pwd.value))
            {
                strength.innerHTML = '<span style="color:green">Strong!</span>';
            }
            else if (mediumRegex.test(pwd.value))
            {
                strength.innerHTML = '<span style="color:orange">Medium!</span>';
            }
            else
            {
                strength.innerHTML = '<span style="color:red">Weak!</span>';
            }
        });
});