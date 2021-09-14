window.onload = function (){
    const submit = document.getElementById("submit");
    submit.addEventListener('click', validate);
}

function validate(){
    const cardnumber = document.getElementById("carnumber");
    const errorcard= document.getElementById("errorcardnumber");
    expcard=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9][0-9])[0-9]{12})$/im;


    if(!cardnumber.value){
        errorcard.classList.add("visible");
        cardnumber.classList.add("invalid");
        msj="Ingrese numero de tarjeta"
        errorcard.innerHTML=msj;
    }else if(!expcard.test(cardnumber.value)){
        errorcard.classList.add("visible");
        cardnumber.classList.add("invalid");
        msj="Numero de tarjeta, tiene formato invalido , revise que no tenga guiones"
        errorcard.innerHTML=msj;
    }
    else{
        errorcard.classList.remove("visible");
        cardnumber.classList.remove("invalid");
    }


}