'use strict';
class Neurona {
  /**
   * pesos: Array, sesgo: Number, eta: Number, setEntrenamiento: Object
   */
  constructor(pesos, sesgo, eta) {
    this.pesos = pesos;
    this.sesgo = sesgo;
    this.eta = eta;
    this.setEntrenamiento = [];
  }

  predecir() {
    return math.multiply(this.pesos, math.transpose(this.setEntrenamiento)) + this.sesgo;
  }

  sigmoide(prediccion) {
    return 1/(1+Math.pow(Math.E, -prediccion));
  }

  derivada(prediccion) {
    return 1//prediccion * (1 -prediccion);
  }

  entrenar(setPuntos) {
    let y = setPuntos.pop().y;
    this.setEntrenamiento = [];
    setPuntos.forEach(element => {
      this.setEntrenamiento.push(element.y);
    });
    let prediccion = this.predecir();
    let sigmoide = this.sigmoide(prediccion);
    let derivada = this.derivada(sigmoide);
    let error = this.eta * (y - prediccion) * derivada;
    this.pesos = math.add(this.pesos, math.multiply(error, this.setEntrenamiento));
    this.sesgo = this.sesgo + error;
    return error;
  }
}