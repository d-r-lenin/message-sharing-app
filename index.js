const input=document.querySelector('#input');
const linkInput= document.querySelector("#link-input");
const inputPanel=document.querySelector('#input-form');
const linkPanel=document.querySelector('#link-form');
const msgDisplay=document.querySelector('#display-msg');
const display=document.querySelector('#display');
const {hash}=window.location;
if(hash){
	inputPanel.classList.add('hide');
	display.classList.remove('hide');
	msgDisplay.innerText=decodeURIComponent(escape(window.atob(hash.replace(/#/,""))));;
}
document.querySelector('form').addEventListener("submit",event=>{
	event.preventDefault();
	const encoded=btoa(unescape(encodeURIComponent(input.value)));;
	inputPanel.classList.add('hide');
	linkPanel.classList.remove('hide');
	linkInput.value=window.location+'#'+encoded;
	linkInput.select();
});
