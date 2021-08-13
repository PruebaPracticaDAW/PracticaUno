//VALIDACION DE CAMPOS DE ENTRADA
function validar(){  
  var nombre=document.formulario.nombre.value;  
  var ape=document.formulario.ape.value;  
  var paisN=document.formulario.paisN.value;  
  var correo=document.formulario.correo.value;  
  var fechaN=document.formulario.fechaN.value;  
  var genero=document.formulario.genero.value;  
  var paisR=document.formulario.paisR.value;  
  var dep=document.formulario.departamentos.value;  
  var tele=document.formulario.tele.value;  
  var celu=document.formulario.celu.value;  
  var dom=document.formulario.dom.value;  
    
  if (nombre==null || nombre==""){  
    alert("El campo del nombre se encuentra vacío."); 
    document.formulario.nombre.focus() ; 
    return false;  
  }
  if (ape==null || ape==""){  
    alert("El campo del apellido se encuentra vacío.");  
    document.formulario.ape.focus() ;
    return false;  
  }
  if (paisN==null || paisN==""){  
    alert("El campo del país de nacimiento se encuentra vacío.");  
    document.formulario.paisN.focus() ;
    return false;  
  }
  if (correo==null || correo==""){  
    alert("El campo del correo se encuentra vacío.");  
    document.formulario.correo.focus() ;
    return false;  
  }
  if (fechaN==null || fechaN==""){  
    alert("El campo de la fecha de nacimiento se encuentra vacío.");  
    document.formulario.fechaN.focus() ;
    return false;  
  }
  if (genero==null || genero==""){  
    alert("El campo del género se encuentra vacío.");  
    document.formulario.genero.focus() ;
    return false;  
  }
  if (paisR==null || paisR==""){  
    alert("El campo del país de residencia se encuentra vacío.");  
    document.formulario.paisR.focus() ;
    return false;  
  }
  if (dep==null || dep==""){  
    alert("El campo del departamento se encuentra vacío.");  
    document.formulario.departamentos.focus() ;
    return false;  
  }
  if (tele==null || tele==""){  
    alert("El campo del teléfono de casa se encuentra vacío.");  
    document.formulario.correo.focus() ;
    return false;  
  }
  if (celu==null || celu==""){  
    alert("El campo del celular se encuentra vacío.");  
    document.formulario.celu.focus() ;
    return false;  
  }
  if (dom==null || dom==""){  
    alert("El campo del domicilio se encuentra vacío.");  
    document.formulario.dom.focus() ;
    return false;  
  }
}