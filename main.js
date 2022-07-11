document.body.addEventListener('click', click);

function click(event){
    console.log(event.target);
    const elem = document.createElement("div");
    elem.id = 'div3';
    elem.textContent = "DIV 3";
    event.target.insertAdjacentElement('beforebegin', elem);
}

