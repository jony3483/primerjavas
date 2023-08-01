
/*let numero = prompt("elije tu hora nº1 odontologia, nº2 medicina general, nº3 traumatologia");


while(numero != "ESC"){
    switch (numero){
        case "1":
            alert("odontologia");
            break;
        case "2":
            alert("medicina general");
            break;
        case "3":
            alert("traumatologia");
            break;            
        default:
            alert("no hay especialidad");
            return
    
    }
 //  let seguro = prompt("elije seguro nº1 fonosa , nº2 isapre");
}
    while(seguro != "ESC"){
        switch (seguro){
            case "1":
                alert("fonsas");
                break;
            case "2":
                alert("isapre");
                break;           
            default:
                alert("no hay seguro");
                break;
        }
    }*/  

  /*  function consulta(numero,opcion){
        switch (numero) {
            case "1":
                alert("odontologia");
                break;
            case 2:
                alert("medicina");
                break;
            case 3:
                alert("traumatologia");
                break;
            default:
                alert("elija su especialidad");
                break;
        }
        let numero = parseInt (prompt("elija su consulta nº1 odontologia nº medicina nº traumatologia")); 
    }*/




    function datosPasiente(nombre, edad, direccion,num) {
        alert(`${nombre} ${edad} ${direccion} ${num}`);
    }
    alert("ingrese especi 1odontologia 2medicina 3traumatologia");
    let num = prompt("ingrese opcion medica");
        
        
       
    let salir = prompt("ingrese nº 7 para salir");
        while (salir == 7);{
            if(num == 1){
                alert("odontologia");
                }else if (num == 2){
                alert("medi");
                }else if (num == 3){
                alert("trau");
                }else{
                alert("selecione medico");
                num = prompt("ingrese opcion");
                }
           
        }
        
    


        alert("ingrese datos del paciente");
        let nombre = prompt("ingrese nombre");
        let edad = prompt("ingrese  edad");
        let direccion = prompt("ingrese su direccion");
    datosPasiente(nombre, edad, direccion, num);









    


