const form = document.getElementById('form');
const username = document.getElementById('username');
const pass = document.getElementById('pass');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const owner = document.getElementById('owner');
const apartment_number = document.getElementById('apartment_number');
const but_reg = document.getElementById('but_reg');



function checkInputs() {
	
	var success_msg=document.getElementById("success_msg")
	success_msg.innerHTML ='';  
	success_msg.parentElement.className="";
	
	document.getElementById("success_msg").innerHTML ='';  
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passValue = pass.value.trim();
	const apartment_numberValue = apartment_number.value.trim();
	const phoneValue = phone.value.trim();
	const ownerValue = owner.value.trim();
	var success=true;
	

	if(usernameValue === '') {
		setErrorFor(username, 'Потребителското име е задъжително поле!');
		success=false;
	}
	else if(usernameValue.length<3 || usernameValue.length>20){
		setErrorFor(username, 'Невалидно потребителско име!');
		success=false;
	}
	else {
		setSuccessFor(username);
	}
	if(apartment_numberValue === '') {
		setErrorFor(apartment_number, 'Номера на апартамента е задъжително поле!');
		success=false;
	}
	else if(!isApartmentNumber(apartment_numberValue)){
		setErrorFor(apartment_number, 'Невалиден номер на апартамент');
		success=false;
	} else {
		setSuccessFor(apartment_number);
	}
	var correctNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  
	if(phoneValue === '') {
		setErrorFor(phone, 'Телефона е задъжително поле!');
		success=false;
	}
	else if(!phoneValue.match(correctNumber)){
		setErrorFor(phone, 'Невалиден телефонен номер!');
		success=false;
	} else {
		setSuccessFor(phone);
	}
	
	setSuccessFor(owner);
	
	if(passValue === '') {
		setErrorFor(pass, 'Паролата е задъжително поле!');
		success=false;
	}
	else if(!isPassword(passValue)){
		setErrorFor(pass, 'Невалиднa парола');
		success=false;
	}
	else {
		setSuccessFor(pass);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Имейлът е задъжително поле!');
		success=false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Невалиден имейл!');
		success=false;
	} else {
		setSuccessFor(email);
	}

	if(success==true)
	{
		var success_msg=document.getElementById("success_msg")
		success_msg.innerHTML ='Успешна регистрация!';  
		success_msg.parentElement.className="success_border_active";
		
		username.value='';
		email.value='';
		pass.value='';
		apartment_number.value='';
		phone.value='';	
	}
	

}

function setInitialStyle()
{
	form.parentElement.className='form_border';
	document.getElementById("error_msg").innerHTML ='';  
}

function setErrorFor(input, message) {

	input.parentElement.querySelector('.error_msg').innerHTML=message;
	var parent=input.parentElement.querySelector('.error_border');
	if(parent!=null)
	{
		parent.className='error_border_active';
		input.className='error_fild';
	}
	parent=input.parentElement.querySelector('.success_fild');
	if(parent!=null)
	{
		input.className='error_fild';
	}
}

function setSuccessFor(input) {

	input.className = 'success_fild';
	if(input.name!='owner')
	{
		input.parentElement.querySelector('.error_msg').innerHTML='';
		var parent=input.parentElement.querySelector('.error_border_active');
		if(parent!=null)
		{
			parent.className='error_border';
		}
	}
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password) {

    return /[A-Z]/       .test(password) &&
           /[a-z]/       .test(password) &&
           /[0-9]/       .test(password) &&
          password.length > 5 && password.length<21;

}

function isApartmentNumber(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n > 0 && n<=500;
}

form.addEventListener("submit", e => {
	e.preventDefault();
	
	checkInputs();
	 
});

