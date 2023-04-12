let boton = document.getElementById("sendIt");
let mensaje = document.getElementById("mensaje_wild");
let run = document.getElementById("cerrar_wild");
let inicio = document.getElementById("inicio");

boton.addEventListener("click", function() {
  run.style.display = "block";
  mensaje.style.display = "block";

});

run.addEventListener("click", function() {
    mensaje.style.display = "none";
    run.style.display = "none";
  });

  // inicio.addEventListener("click", function() {
  //   alert('Es momento de buscar un chuyo');
  // });