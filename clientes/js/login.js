function init () {
	var btn = document.getElementById('btnLogin');
	if (btn) {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			var email = document.getElementById('txtEmail').value;
			var psw = document.getElementById('txtPass').value;
			login(email, psw);
		});
	}
}

function login (email, psw) {
	if (email.toLowerCase().trim() === 'admin@gmail.com' && psw.toLowerCase().trim() === 'admin123*') {
		window.location.href = 'index.html';
	} else {
		alert('Datos incorrectos');
	}
}



// registrarClienteNormal
/*  comentarios 
*/

document.addEventListener('DOMContentLoaded', function(e) {
	// function code
	init();
});