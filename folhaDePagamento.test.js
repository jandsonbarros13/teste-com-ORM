import { somaHorasExtras, calculaDescontos } from "./index";

TextDecoderStream('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500)

    expect(retornado).toBe(esperado);
})