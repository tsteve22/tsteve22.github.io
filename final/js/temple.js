window.addEventListener('load',()=>{
    const requestURL = "json/temple.json"
    fetch(requestURL)
    .then((response)=>{
        return response.json()
    })
    .then((jsonObject)=>{
    console.log(jsonObject);
    Object.entries(jsonObject).forEach(([key,temple]) =>{
       // if(temple.state == "ID"){
        buildTempleCard(temple);   
  // }
    });
    
});
});
function buildTempleCard(temple){
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
    <img src="${temple.imageurl}" alt="${temple.name}">
    <p> First President: <b>${temple.presidents[0]} 1st of ${temple.presidents.length}</b><p>
    <p> Current President: <b>${temple.presidents[temple.presidents.length-1]}</b> </p>
    <p>Phone: <b>${temple.phone}</b></p>
    <p> Address: <b>${temple.address1}, <b>${temple.city}, </b>${temple.state}, <b>${temple.zip} <b></p>
    <p>Services: <b>${temple.services}</b></p> 
    <p>Temple Closures: <b>${temple.closures}</b></p>`;
    document.querySelector("#temples").appendChild(card);
}
