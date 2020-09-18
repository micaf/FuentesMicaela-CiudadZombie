/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

  mover: function(direccion,movX,movY){
    this.cambiarDireccion(direccion)
    this.x=movX;
    this.y=movY;
  },

  perderVidas: function(cantVidas){
    this.vidas-=cantVidas;
    console.log(this.vidas);
  },

  cambiarDireccion: function(direccion){
    anchoVertical = 15;
    altoVertical = 30;
    anchoHorizontal = 30;
    altoHorizontal = 15;
  switch(direccion){
    case 'izq':
      this.sprite ='imagenes/auto_rojo_izquierda.png'
      this.ancho = anchoHorizontal;
      this.alto = altoHorizontal;
      break;
    case 'arriba':
      this.sprite ='imagenes/auto_rojo_arriba.png'
      this.ancho = anchoVertical;
      this.alto = altoVertical;
      break;
    case 'der':
      this.sprite ='imagenes/auto_rojo_derecha.png'
      this.ancho = anchoHorizontal;
      this.alto = altoHorizontal;
      break;
    default:
      this.sprite = 'imagenes/auto_rojo_abajo.png'
      this.ancho = anchoVertical;
      this.alto = altoVertical;
      break;
    }
  }
}



