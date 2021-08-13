// FUNCIÓN REGISTRAR
function registrar(){
    function candidato(nombre, ape, paisN, correo, genero, fechaN, paisR, dep, tele, celu, dom){
        this.nombre = nombre;
        this.ape = ape;
        this.paisN = paisN;
        this.correo = correo;
        this.genero = genero;
        this.fechaN = fechaN;
        this.paisR = paisR;
        this.dep = dep;
        this.tele = tele;
        this.celu = celu;
        this.dom = dom;
    }
    //ASIGNACION DE VALORES A LAS VARIABLES
    var nombreR = document.getElementById("nombre").value;    
    var apeR = document.getElementById("apellido").value;
    var paisNR = document.getElementById("paisN").value;
    var correoR = document.getElementById("correo").value;
    var generoR = document.getElementById("genero").value;
    var fechaNR = document.getElementById("fechaN").value;
    var paisRR = document.getElementById("paisR").value;
    var depR = document.getElementById("Dept").value;
    var teleR = document.getElementById("tele").value;
    var celuR = document.getElementById("celu").value;
    var domR = document.getElementById("dom").value;
    
    candidatosR = new candidato(nombreR, apeR, paisNR, correoR, generoR, fechaNR, paisRR, depR, teleR, celuR, domR);    
    agregados();
}
var baseDatos = [];
function agregados(){
    baseDatos.push(candidatosR);
    //console.log(baseDatos);
    document.getElementById("tabla").innerHTML += '<tbody><tr><td>'+candidatosR.nombre+'</td><td>'+candidatosR.ape+'</td><td>'+candidatosR.paisN+'</td><td>'+candidatosR.correo+'</td><td>'+candidatosR.genero+'</td><td>'+candidatosR.fechaN+'</td><td>'+candidatosR.paisR+'</td><td>'+candidatosR.dep+'</td><td>'+candidatosR.tele+'</td><td>'+candidatosR.celu+'</td><td>'+candidatosR.dom+'</td></tr></tbody>';
}
