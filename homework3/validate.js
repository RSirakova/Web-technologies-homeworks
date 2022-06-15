var users=new Array;
function ajax(url,settings)
{
	var xhr=new XMLHttpRequest();
	
	xhr.onload=function(){
		if(xhr.status==200)
		{
			settings.success(xhr.responseText);
		}
		else
		{
			console.error(xhr.responseText);
		}
	}
	
	xhr.open(settings.method || 'GET',url,true);
	xhr.send(settings.data || null);
}

(function()
{
		var url="https://jsonplaceholder.typicode.com/users";
		var callBack=function(text){

			var jsonTarger=JSON.parse(text);
			for (var i=0;i<(jsonTarger.length);++i)
			{
				var user=(jsonTarger[i].username);
				users.push(user);	
			}
			
			console.log(users);
			console.log(users.includes("Bret"));
		}
		
		ajax(url,{success:callBack})
})();

const form = document.getElementById('form');
const username = document.getElementById('username');
const name = document.getElementById('name');
const family = document.getElementById('family-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const street = document.getElementById('street');
const city = document.getElementById('city');
const postal= document.getElementById('postal-code');



function checkInputs() {
	document.getElementById("success").innerHTML ='';  
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const nameValue = name.value.trim();
	const familyValue = family.value.trim();
	const postalValue = postal.value.trim();
	const streetValue = street.value.trim();
	const cityValue = city.value.trim();
	const passwordValue = password.value.trim();

	var success=true;
	
	if(usernameValue === '') {
		setErrorFor(username, 'Потребителското име е задъжително поле!');
		success=false;
	}
	else if(usernameValue.length<3 || usernameValue.length>10){
		setErrorFor(username, 'Невалидно потребителско име!');
		success=false;
	}
	else if(users.includes(usernameValue))
	{
		setErrorFor(username, 'Невалидно потребителско име!Името е заето!');
		success=false;
	}
	else {
		setSuccessFor(username);
	}
	
	if(nameValue === '') {
		setErrorFor(name, 'Името е задъжително поле!');
		success=false;
	}
	else if(nameValue.length>50){
		setErrorFor(name, 'Невалидно име');
		success=false;
	} else {
		setSuccessFor(name);
	}
	
	if(familyValue === '') {
		setErrorFor(family, 'Фамилното име е задъжително поле!');
		success=false;
	}
	else if(familyValue.length>50){
		setErrorFor(family, 'Невалидно фамилно име!');
		success=false;
	} else {
		setSuccessFor(family);
	}
	
	setSuccessFor(city);
	setSuccessFor(street);
	
	if(passwordValue === '') {
		setErrorFor(password, 'Паролата е задъжително поле!');
		success=false;
	}
	else if(!isPassword(passwordValue)){
		setErrorFor(password, 'Невалиднa парола');
		success=false;
	}
	else {
		setSuccessFor(password);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'e-mail е задъжително поле!');
		success=false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Невалиден e-mail!');
		success=false;
	} else {
		setSuccessFor(email);
	}
	
	if(!isPostal(postalValue) && postalValue != '' )
	{	
		setErrorFor(postal, 'Невалиден пощенски код!');
		success=false;
	}
	else 
	{
		setSuccessFor(postal);
	}
	
	if(success==true)
	{
		document.getElementById("success").innerHTML ='Успешна регистрация!';  
		username.value='';
		email.value='';
		name.value='';
		family.value='';
		postal.value='';
		city.value='';
		street.value='';
		password.value='';
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const error = formControl.querySelector('.error');
	formControl.className = 'form-control error';
	error.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password) {

    return /[A-Z]/       .test(password) &&
           /[a-z]/       .test(password) &&
           /[0-9]/       .test(password) &&
          password.length > 5 && password.length<11;

}
function isPostal(postal)
{
	var date_regex1 =  /^[0-9]{5}-[0-9]{4}$/;
	var date_regex2 =  /^[0-9]{4}$/;
	if (!(date_regex1.test(postal)) && !(date_regex2.test(postal))) 
		return false;
	else 
		return true;

}

form.addEventListener("submit", e => {
	e.preventDefault();
	
	checkInputs();
});

