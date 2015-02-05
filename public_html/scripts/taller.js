function calcular() {
                var x, y, z;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
                z = document.getElementById("valor3").value;
 
                if (isNaN(x)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 1 debe ser un número</div>";
                }
                else if (isNaN(y)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 2 debe ser un número</div>";
                }
                else if (isNaN(z)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 3 debe ser un número</div>";
                }
                else
                {
                    var rta = parseInt(x) + parseInt(y) + parseInt(z);
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";;
                }
            }
function concatenar() {
    var x,y,z;
    x = document.getElementById("valor1").value;
    y = document.getElementById("valor2").value;
    z = document.getElementById("valor3").value;
    
            var rta = x + y + z;
            document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";
}
function ordenar() {
    var x,y,z;
    x = document.getElementById("valor1").value;
    y = document.getElementById("valor2").value;
    z = document.getElementById("valor3").value;
    
    if (isNaN(x)) {
            document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 1 debe ser un número</div>";
        }
        else if (isNaN(y)) {
            document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 2 debe ser un número</div>";
        }
        else if (isNaN(z)) {
            document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 3 debe ser un número</div>";
        }
        else
        {
            var rta = [parseInt(x), parseInt(y), parseInt(z)];
            rta.sort(function order(a ,b){
                return a - b;
            });
            document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";
    }
}

