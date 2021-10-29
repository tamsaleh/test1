var formulario = document.getElementById("lamia")
var error = []

formulario.addEventListener("submit", function(e) {
e.preventDefault()

var last_name = document.getElementById("apellido")

if (last_name.value.trim().length <= 1) {
  alert("Entra el apellido FORRROOOOO")

}
alert("PASO!")

})

