function calcularNota() {

    var nombre = document.getElementById('nombre').value;
    var ejercicios = parseFloat(document.getElementById('ejercicios').value);
    var teorico = parseFloat(document.getElementById('teorico').value);
    var practico = parseFloat(document.getElementById('practico').value);
    var proyecto = parseFloat(document.getElementById('proyecto').value);
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.classList.remove("aprobado" , "suspendido","nulo")

    if((ejercicios>10 || ejercicios<0 || ejercicios==null) || (teorico>10 || teorico<0 || teorico==null) ||
      (practico>10 || practico<0 || practico==null) || (proyecto<0 || proyecto>10 || proyecto==null)){
        resultadoElement.classList.remove("hidden");
        resultadoElement.innerHTML="Los valores marcados en rojo no son validos";
        resultadoElement.classList.add("nulo");
      }else{
    
    var notaFinal = (ejercicios * 0.2) + (teorico * 0.2) + (practico * 0.3) + (proyecto * 0.3);
    
    var resultadoElement = document.getElementById('resultado');
        resultadoElement.classList.remove('hidden');
  
    if (notaFinal >= 5) {
      resultadoElement.innerHTML = "Has aprobado " + nombre + ", con una nota de " + notaFinal.toFixed(2);
      resultadoElement.classList.add('aprobado');
    } else {
      resultadoElement.innerHTML = "Has suspendido " + nombre + ", con una nota de " + notaFinal.toFixed(2);
      resultadoElement.classList.add('suspendido');
    }
  }
  }
  
  function borrar() {
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.classList.remove("aprobado" , "suspendido","nulo")
    resultadoElement.classList.add('hidden');
  
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }

  function comprobarFormulario(){

    var ejercicios = document.getElementById('ejercicios').value;
    var teorico = document.getElementById('teorico').value;
    var practico = document.getElementById('practico').value;
    var proyecto = document.getElementById('proyecto').value;

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.classList.remove("aprobado" , "suspendido","nulo","hidden")

    if(ejercicios.trim() === "" || teorico.trim() === "" || 
    proyecto.trim() === "" || practico.trim() === "" ){
      resultadoElement.classList.add("incompleto");
      resultadoElement.innerHTML = "Debe de rellenar los campos marcados con *"
    }
    else{
      calcularNota();
    }
  }
