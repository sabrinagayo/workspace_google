//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	var nombreUsuario = profile.getName();
	sessionStorage.setItem('logueado', 'true');
	localStorage.setItem('nombreUsuario', nombreUsuario);
	console.log(nombreUsuario);
	window.location.replace("index.html");//redirije al index.html
	return true;//hace que al final la información se envíe al servidor
	/*
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	var id_token = googleUser.getAuthResponse().id_token;
	console.log(id_token);
	*/
	/*guardar nombre*/

}
function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	  console.log('User signed out.');
	});
}

document.addEventListener("DOMContentLoaded", function(e){});