class Neurona{
  /**
   * pesos: Array, sesgo: Number, eta: Number, setEntrenamiento: Object
   */
  constructor(pesos, sesgo, eta, setEntrenamiento) {
    this.pesos = pesos;
    this.sesgo = sesgo;
    this.eta = eta;
    this.setEntrenamiento = setEntrenamiento;
  }

  predecir(iteracion) {
    const y = math.multiply(math.transpose(this.pesos), this.setEntrenamiento.x[iteracion]) + this.sesgo;
    return 1/(1 + Math.pow(Math.E, -y));
    // console.log(y, this.setEntrenamiento.x[iteracion]);
    
  }

  entrenar() {
    let entrenado = true;
    for(let i = 0; i < this.setEntrenamiento.x.length; i++) {
      let error = this.setEntrenamiento.y[i] - (this.predecir(i));
      console.log('error', error, 'ite', i, 'pred', this.predecir(i), this.setEntrenamiento.y[i]);
      if(error > 0.2 || error < -0.1){   
        let mult = math.multiply(this.eta, error, this.setEntrenamiento.x[i]);
        //console.log('mult', mult)
        this.pesos = math.add(this.pesos, mult);
        this.sesgo = this.sesgo + this.eta * error;
        entrenado = false;
      }
    }
    return entrenado;
  }
}