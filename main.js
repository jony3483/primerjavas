
    function datosPasiente(nombre, edad, direccion,num) {
        alert(`${nombre} ${edad} ${direccion} ${num}`);
    }
    alert("ingrese especialidad : 1) odontologia, 2) medicina general, 3) traumatologia");
    let num = parseInt(prompt("ingrese opcion medica"));
        
        
    let salir = parseInt(prompt("ingrese el numero 7 para salir o presione aceptar para continuar"));
        while (salir === 7){
            if(num == 1){
                alert("odontologia");
            }else if (num == 2){
                alert("medicina general");
            }else if (num == 3){
                alert("traumatologia");
            }else{
                alert("seleccione especialidad valida");
                num = prompt("ingrese opcion medica");
            }
            salir = parseInt(prompt(" ingrese el numero 7 para salir"));
        }
        
        alert("ingrese datos del paciente");
        let nombre = prompt("ingrese nombre");
        let edad = prompt("ingrese  edad");
        let direccion = prompt("ingrese su direccion");
        datosPasiente(nombre, edad, direccion, num);

