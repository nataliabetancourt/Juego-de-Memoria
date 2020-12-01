class Carta {
    constructor(x, y, imagen, tipo){
        this.x = x;
        this.y = y;        
        this.tipo = tipo;
        this.imagen = imagen;
        this.ancho = 60;
        this.alto = 60;
        this.mostrar = false;
        this.completado = false;
    }

    pintar() {
        if(!this.mostrar){
            fill(0);
            rectMode(CENTER);
            rect(this.x, this.y,this.ancho,this.alto);
        } else {
            fill(255);
            imageMode(CENTER);        
            image(this.imagen,this.x,this.y,this.ancho,this.alto);
        }

    }

    validar(dx, dy) {
        let result = false;
        if(dx > this.x - 30 && dx < this.x + 30 && dy > this.y - 30 && dy < this.y + 30 && !this.mostrar && !this.completado){
            return true;
        }
        return result;
    }

    getX () {
        return this.x;
    }
    getY() {
        return this.y;
    }

    setMostrar(mostrar){
        this.mostrar = mostrar;
    }

}