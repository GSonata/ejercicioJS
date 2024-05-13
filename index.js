

function calcularNota() {


    var nombre = document.querySelector('#nombre').value;
    var ejercicios = parseFloat(document.querySelector('#ejercicios').value);
    var teorico = parseFloat(document.querySelector('#teorico').value);
    var practico = parseFloat(document.querySelector('#practico').value);
    var proyecto = parseFloat(document.querySelector('#proyecto').value);
    var resultadoElement = document.querySelector('#resultado');
    resultadoElement.classList.remove("aprobado" , "suspendido","nulo")

    if((ejercicios>10 || ejercicios<0 || ejercicios==null) || (teorico>10 || teorico<0 || teorico==null) ||
      (practico>10 || practico<0 || practico==null) || (proyecto<0 || proyecto>10 || proyecto==null)){
        resultadoElement.classList.remove("hidden");
        resultadoElement.textContent="Los valores marcados en rojo no son validos";
        resultadoElement.classList.add("nulo");
      }else{
    
    var notaFinal = (ejercicios * 0.2) + (teorico * 0.2) + (practico * 0.3) + (proyecto * 0.3);
    
    var resultadoElement = document.querySelector('#resultado');
        resultadoElement.classList.remove('hidden');
  
    if (notaFinal >= 5) {
      resultadoElement.textContent = "Has aprobado " + nombre + ", con una nota de " + notaFinal.toFixed(2);
      resultadoElement.classList.add('aprobado');
    } else {
      resultadoElement.textContent = "Has suspendido " + nombre + ", con una nota de " + notaFinal.toFixed(2);
      resultadoElement.classList.add('suspendido');
    }
  }
  }
  
  function borrar() {
    var resultadoElement = document.querySelector('#resultado');
    resultadoElement.classList.remove("aprobado" , "suspendido","nulo")
    resultadoElement.classList.add('hidden');
  
    var inputs = document.querySelector('#input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }

  function comprobarFormulario(){

    var ejercicios = document.querySelector('#ejercicios').value;
    var teorico = document.querySelector('#teorico').value;
    var practico = document.querySelector('#practico').value;
    var proyecto = document.querySelector('#proyecto').value;

    var resultadoElement = document.querySelector('#resultado');
    resultadoElement.classList.remove("aprobado" , "suspendido","nulo","hidden")

    if(ejercicios.trim() === "" || teorico.trim() === "" || 
    proyecto.trim() === "" || practico.trim() === "" ){
      resultadoElement.classList.add("incompleto");
      resultadoElement.textContent = "Debe de rellenar los campos marcados con *"
    }
    else{
      calcularNota();
    }
  }
