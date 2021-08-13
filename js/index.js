// FORMULARIO
    //Defino las variables 
function mostrarDepartamentos(){

    var deptGuate = new Array("-", "Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "Escuintla",
    "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Petén", "El progreso", "Quetzaltenango", "Quiché",
    "Retalhuleu", "Sacatepéquez", "San Marcos", "Santa Rosa", "Sololá", "Zacapa"); 

    var deptESA = new Array("-", "Ahuachapan","Chalatenango","Cuscatlán","La libertad",
    "Morazán","La Paz","Santa Ana","San Miguel","San Salvador","San Viccente","Sonsonate",
    "La Unión","Usulután","Cabañas"); 

    var deptHon = new Array("-", "Atlántida","Choluteca","Colón","Comayagua","Copán",
    "Cortés","El Paraiso","Francisco Morazán","Gracias a Dios","Intibucá","Islas de la bahía",
    "La Paz","Lempira","Ocotepeque", "Olancho","Santa Bárbara","Valle", "Yoro"); 

    var deptNic = new Array("-", "Atlantico Norte","Atlantico sur","Boaco","Carazo","Chinandega",
    "Chontales","Esteli","Granada","Jinotega","León","Madriz","Managua","Masaya","Matagalpa", "Nueva Segobia"
    ,"Nueva Segobia", "Rio San Juan", "Rivas"); 

    var deptCostaR = new Array("-", "San José","Alajuela","Cartago","Heredia","Guanacaste","Puntaneras",
    "Limón"); 

    var deptPan = new Array("-", "Coclé","Colón","Chiriquí","Los santos","Panamá","Veraguas",
    "Balboa","Bocas del toro","Darién","Tulenega"); 

    var departamentos = document.getElementById("Dept");
    var paises = document.getElementById('paisR'); 
    var pais = paises.value;


    if(pais == "Guatemala"){
        
        for(var i=0;i<deptGuate.length;i++){ 
            departamentos.options[i] = new option(depGuate[i]);
            document.getElementById('Dept').innerHTML = departamentos.options[i]; 
        }
    }else if(pais == "Honduras"){
        for(var i=0;i<deptHon.length;i++){ 
            departamentos.options[i] = new option(depHon[i]);
        }
    } else if(pais == "El Salvador"){
        for(var i=0;i<deptESA.length;i++){ 
            departamentos.options[i] = new option(depESA[i]);
        }
    } else if(pais == "Nicaragua"){
        for(var i=0;i<deptNic.length;i++){ 
            departamentos.options[i] = new option(depNic[i]);
        }
    } else if(pais == "Costa Rica"){
        for(var i=0;i<deptCostR.length;i++){ 
            departamentos.options[i] = new option(depCostR[i]);
        }
    } else if(pais == "Panama"){
        for(var i=0;i<deptPanama.length;i++){ 
            departamentos.options[i] = new option(depPan[i]);
        }
    } 
}
    // Creo la funcion para permitir el cambio dinámico

   /* function cambio(){
        var paises; 
        //Tomo el valor de el pais seleccionado
        paises = document.formulario.paises[document.formulario.paises.selectedIndex].value; 
        //Verifico que el pais seleccionado esté definido
        if(paises!=0){
            opciones= eval("dept" + paises); 
            //Calculo el número de cosas
            num_opciones=opciones.length; 
            //Marco el numero de opciones en el select
            document.formulario.departamentos.length = num_opciones; 
            //Para cada opcion del array, la pongo en el select
            for(i=0; i<num_opciones; i++){
            document.formulario.departamentos.options[i].value=opciones[i]; 
            document.formulario.departamentos.options[i].text=opciones[i]; 
            }
        }else{
                document.formulario.departamentos.length = 1; 
                document.formulario.departamentos.options[0].value="-"; 
                document.formulario.departamentos.options[0].text="-"; 
        }
    }*/
 







