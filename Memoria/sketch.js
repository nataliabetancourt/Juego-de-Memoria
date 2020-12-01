let carta1;               let carta2;
let cartas = [];          let images = [];

function preload() {
  let indicator = 1;    
  for (let index = 0; index < 8; index++) {
      images[index] = loadImage('/data/img' + indicator + '.jpg');    
      indicator++;    
  } 
}

function restart () {
  let tipos = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
  shuffle(tipos,true);

  let indice = 0;
  let dx = 50;
  let dy = 200; 
  for (let i = 0; i < 16; i++) {        
      let tipoCarta = tipos[i];
      let imagenCarta = images[tipoCarta];
      cartas[i]= new Carta (dx, dy, imagenCarta, tipoCarta);
      dx+=75;
      if(dx>=300){
        dx=50;
        dy+=75;
      }
      indice++;
  }
}

function setup() {
  createCanvas(320, 675); 
  this.carta1 = null;
  this.carta2 = null;
  restart();
}


function draw() {
  background(220);  
  cartas.forEach((carta) => {    
    carta.pintar();
  });

}

function mousePressed () {
  for (let i = 0; i < cartas.length; i++) {
   cartas[i].validar(mouseX, mouseY);
   if(cartas[i].validar(mouseX, mouseY)) {
     if(carta1 == null) {
       carta1 = cartas[i];
       cartas[i].setMostrar(true);
       return true;
     } else if (cartas[i] !== carta1 && carta2 == null) {
       carta2 = cartas[i];
       cartas[i].setMostrar(true);
       return true;
     }
   }
  }
}
