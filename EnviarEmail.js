emailjs.init("pIk4T6CmiHjsPFrdI");

const form = document.getElementById("contact-form");

const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(

        "service_ylg6kjo",
        "template_phh1if4",
        this

    )

    .then(() => {

        respuesta.innerHTML =
        "Mensaje enviado correctamente.";

        respuesta.style.color = "#00c3ff";

        form.reset();

    })

    .catch(() => {

        respuesta.innerHTML =
        "Error al enviar el mensaje.";

        respuesta.style.color = "red";

    });

});