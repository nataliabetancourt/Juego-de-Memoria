class Carta {
    constructor(x, y, imagen, tipo){
        this.x = x;
        this.y = y;        
        this.tipo = tipo;
        this.imagen = imagen;
        this.ancho = 60;
        this.alto = 60;
    }

    pintar() {
        fill(0);
        rectMode(CENTER);
        rect(this.x, this.y,this.ancho,this.alto);

        if(click==true){
            fill(255);
            imageMode(CENTER);        
            image(this.imagen,this.x,this.y,this.ancho,this.alto);
        }
        
    }

    getX () {
        return this.x;
    }
    getY() {
        return this.y;
    }
}