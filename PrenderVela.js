function encenderVela()
{
  if(document.getElementById('cerillos').checked)
    {
     document.write
     ("¡Felicidades! Encendiste la Vela"
     +"<br><br><img width='150' height='250' src='E:/PLATZI/Enceder_Vela/flameless-candle-encend.png'/><br><br>");
     document.write
     ("<br>"+"Con unos buenos Cerillos"
     +"<br><br><img width='150' height='150' src='E:/PLATZI/Enceder_Vela/cerillo.png'/><br><br>");
   }
   else if (document.getElementById('mechera').checked)
    {
      document.write
      ("¡Felicidades! Encendiste la Vela"
      +"<br><br><img width='150' height='250' src='E:/PLATZI/Enceder_Vela/flameless-candle-encend.png'/>");
      document.write
      ("<br>"+"Con una buena Mechera"
      +"<br><br><img width='150' height='150' src='E:/PLATZI/Enceder_Vela/mechera.png'/><br><br>");
   }
   else
    {
     document.write
     ("¡Felicidades! Encendiste la Vela"
     +"<br><br><img width='150' height='250' src='E:/PLATZI/Enceder_Vela/flameless-candle-encend.png'/>");
     document.write
     ("<br>"+"Con un Buen Fuego"
      +"<br><br><img width='150' height='150' src='E:/PLATZI/Enceder_Vela/fire.png'/><br><br>");
   }
}
