const {
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    deEuroAdolar,
} = require("./index2.js");
describe('tienenMismaLongitud(str1,str2)', function () {
    it("Deberia devolver true si los strings tienen la misma longitud y sino false", function () {
        expect(tienenMismaLongitud('hola', 'amiga')).toBe(false);
        expect(tienenMismaLongitud('pasado', 'mañana')).toBe(true);

    });
});
describe('sonIguales(x, y)', function () {
    it("Deberia ser iguales", function () {
        expect(sonIguales(2, 2)).toBe(true);
        expect(sonIguales(2, 1)).toBe(false);
    });
});



describe('menosQueNoventa(num)', function () {
    it("Deberia devolver true si es menor a 90", function () {
        expect(menosQueNoventa(89)).toBe(true);
        expect(menosQueNoventa(91)).toBe(false);

    });
});
describe('mayorQueCincuenta(num)', function() {
    it('Deberia devolver true si el numero es mayor a cincuenta sino false', function() {
      expect(mayorQueCincuenta(15)).toBe(false);
      expect(mayorQueCincuenta(50)).toBe(false);
      expect(mayorQueCincuenta(61)).toBe(true);
    });
  });
  describe('divide(x, y)', function () {
    it("Deberia devolver la division de x/y", function () {
        expect(divide(8, 2)).toBe(4);

    });
});
describe('multiplica(x, y)', function () {
    it("Debe devolver la multiplicacion x* y", function () {
        expect(multiplica(2, 5)).toBe(10);

    });
});
describe('obtenerResto(x, y)', function() {
    it('Deberia devolver el resto de dividir x sobre y', function() {
      expect(obtenerResto(15, 5)).toBe(0);
      expect(obtenerResto(21, 5)).toBe(1);
      expect(obtenerResto(22, 5)).toBe(2);
    });
  });
describe('esPar(num)', function () {
    it("Deberia ser par", function () {
        expect(esPar(80)).toBe(true);


    });
});
describe('esImpar(num)', function () {
    it("Deberia ser impar", function () {
        expect(esImpar(1)).toBe(true);


    });
});
describe('elevar(num)', function () {
    it("Deberia dar un resultado de elevar al exponente", function () {
        expect(elevar(2, 3)).toBe(8);
        expect(elevar(4, 3)).toBe(64);

    });
});
describe('redondearNumero(num)', function () {
    it("Deberia redondear el numero", function () {
        expect(redondearNumero(4.01)).toBe(5);


    });
});
describe('redondearHaciaArriba(num)', function() {
    it('Deberia devolver el numero redondeado para arriba', function() {
      expect(redondearHaciaArriba(1.5)).toBe(2);
      expect(redondearHaciaArriba(2)).toBe(2);
      expect(redondearHaciaArriba(0.1)).toBe(1);
    });
  });
describe('numeroRandom()', function () {
    it("Deberia dar resultado aleatorio entre 0 y 1", function () {
        expect(typeof numeroRandom()).toBe('number');
        expect(numeroRandom()).toBeGreaterThanOrEqual(0);
        expect(numeroRandom()).toBeLessThan(1);
    });
});
describe('esPositivo(numero)', function() {
    it('Debería devolver el string Es positivo ó Es negativo\'', function() {
      expect(esPositivo(0)).toBe(false);
      expect(esPositivo(23)).toBe('Es positivo');
      expect(esPositivo(-2)).toBe('Es negativo');
    });
  });
  describe('combinarNombres(nombre, apellido)', function() {
    it('Deberia devolver los strings combinados con un espacio en el medio', function() {
      expect(combinarNombres('Soy', 'monfortiano')).toString('Soy monfortiano');
    });
  });
  
  describe('obtenerSaludo(nombre)', function() {
    it('Deberia devolver el string Hola nombre!', function() {
      expect(obtenerSaludo('Martin')).toString('Hola Martin!');
      expect(obtenerSaludo('Andres')).toString('Hola Andres!');
    });
  });
  
  describe('obtenerAreaRectangulo(alto, ancho)', function() {
    it('Deberia retornar el area correcta del rectangulo', function() {
      expect(obtenerAreaRectangulo(2, 2)).toBe(4);
      expect(obtenerAreaRectangulo(3, 6)).toBe(18);
    });
  });
  
  describe('retornarPerimetro(lado)', function() {
    it('Deberia retornar el perímetro correcto del cuadrado', function() {
      expect(retornarPerimetro(2)).toBe(8);
      expect(retornarPerimetro(8)).toBe(32);
    });
  });
  describe('deEuroAdolar(euro)', function() {
    it('Deberia retornar el valor correcto de euro a dolar', function() {
      expect(deEuroAdolar(100)).toBe(120);
      expect(deEuroAdolar(200)).toBe(240);
    });
  });

