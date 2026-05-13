function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior:'smooth'
    });
}

const form = document.getElementById("contactForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e){
    e.preventDefault();

    mensaje.innerText = "Mensaje enviado correctamente. Nos pondremos en contacto contigo.";

    form.reset();
});

