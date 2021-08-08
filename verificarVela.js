
function validarStatus()
{

   if(document.getElementById('velaenc').checked)
    {
     document.write
     ("¡Felicidades! Tu Vela esta Encendida"
     +"<br><br><img width='150' height='250' src='E:/PLATZI/Enceder_Vela/flameless-candle-encend.png'/>");
    }
    else
    {
       document.write
       ("¡Ups! Tu Vela esta Apagada"
       +"<br><br><img width='150' height='250' src='E:/PLATZI/Enceder_Vela/vela-cilindrica.png'/><br><br>");
       document.write
       ("¡Buscar con que encenderla!"
       +"<a  href='E:/PLATZI/Enceder_Vela/buscarEncendedor.html'><br><br>Buscar Encendedor</a>");
    }
}



function encenderVela()
{
  var encendedor=document.getElementById('id');

  switch (encendedor)
  {
    case cerillos.checked:
    document.write
    ("¡Felicidades! Encendiste la Vela"+"<br><br><img width='150' height='250' src='E:/PLATZI/Enceder_Vela/flameless-candle-encend.png'/>");
    document.write
    ("Con unos buenos Cerillos");
    break;
    case mechera.checked:
      document.write
      ("¡Felicidades! Encendiste la Vela"+"<br><br><img width='150' height='250' src='E:/PLATZI/Enceder_Vela/flameless-candle-encend.png'/>");
      document.write
      ("Con una buena Mechera");
    break;
    default:
    document.write
    ("¡Felicidades! Encendiste la Vela"+"<br><br><img width='150' height='250' src='E:/PLATZI/Enceder_Vela/flameless-candle-encend.png'/>");
    document.write
    ("Con un buen Fuego");
    break;
  }
}
