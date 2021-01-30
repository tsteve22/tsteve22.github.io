window.addEventListener('load', ()=>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');
    
    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')}, false);
    
    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');};
});
const cry = document.querySelector('#copyrightyear');
cry.textContent = new Date().getFullYear(); 

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date();
document.querySelector('#currentdate').innerHTML = date.toLocaleDateString("en-GB", options);