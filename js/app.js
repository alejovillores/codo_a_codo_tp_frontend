// Initiliaze

const priceOptions = ["Estudiante", "Trainee","Junior"];
const pricesValues = ["80","50","15"];
const pricesContainer = document.querySelector("#prices");
//const dataForm = document.querySelector("#dataForm")


for (let i = 0; i < priceOptions.length; i++) {
    let id = priceOptions[i];
    let value = pricesValues[i];
    let priceType = id;
    
    let div = document.createElement("div");
    var template  = `<div class="price_option" id= ${id}><h3> ${priceType} </h3><p> Tienen un descuento </p> <h5> ${value}% </h5> <p style="color: rgb(133, 133, 133);">* presentar información</p></div>`;
    div.innerHTML = template;
    pricesContainer.appendChild(div);
};

const ticketValue = document.querySelector("#ticket_value")
ticketValue.textContent = `VALOR DE TICKET $200`;

function checkInfoFields() {
    let nameField = document.querySelector("#nombre").value;
    let secondNameField = document.querySelector("#apellido").value;
    let emaiField = document.querySelector("#email").value;
    let errorSpan = document.querySelector("#error");

    if (nameField && secondNameField && emaiField) {
        errorSpan.textContent = "";
    }
    else{
        errorSpan.textContent = "Para comprar entradas,debe ingresar sus datos.";
    }

    
    
}

function calculatePrice() {
    let numTickets = 0;
    let descuento = 0;

    let categoriaSelected = document.querySelector("#descuentos").value;
    numTickets = parseInt(document.querySelector("#cantidad").value);    
    let payment = document.querySelector("#payment");

    let index = priceOptions.indexOf(categoriaSelected);
    descuento = Number(pricesValues[index])/100;
    let pago =  numTickets*200*descuento;
    payment.textContent = "Total a pagar:$"+String(pago);
    checkInfoFields();
}

function clean() {
    let payment = document.querySelector("#payment");
    let numField = document.querySelector("#cantidad");
    numField.value = 0;
    payment.textContent = "Total a pagar:";
}

