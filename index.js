var password = document.getElementById('password');

// Password Generator Function
function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 11;
    var password = '';
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password;

    // Background color Changing function
    var backColors = ['#f04a4a', '#f0664a', '#f0844a', '#f0a84a', '#f0cf4a', '#4af07f', '#4af0b9', '#4af0dc', '#4ad1f0', '#4a8cf0', '#a04af0', '#f04aa8', '#f04a71'];
    var randomColorNum = Math.floor(Math.random()*backColors.length+1);
    var randomColor = backColors[randomColorNum];
    document.getElementById('bigBody').style.background = `${randomColor}`;

}

//for copy password
function copyPassword() {
    password.select();
    (navigator.clipboard.writeText(password.value));
    alert('Copied the text: ' + password.value)
}





