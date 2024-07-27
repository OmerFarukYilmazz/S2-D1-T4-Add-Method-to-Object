const addMethods = require('./index.js');
// const addMethods = require('./solution.js');

const a = new Date();
const year = a.getFullYear();

describe('Nesnelere Metod Ekleme Testleri', () => {
  const car = {
    model: 'VW Passat',
    yas: 11,
    kilometre: 153000,
    fiyat: 800000,
  };

  const result = addMethods(car);
  const funcString = addMethods.toString();

  test('Fonksiyonun dönüş değeri nesne mi?', () => {
    expect(typeof result).toBe('object');
    expect(Array.isArray(result)).not.toBe(true); // Nesne olmalı, Array değil
  });

  test('Spread ile kopyalanmış mı?', () => {
    expect(funcString.includes('...')).toBe(true);
  });

  test('getKilometers metodu eklenmiş mi?', () => {
    expect(typeof result.getKilometers).toBe('function');
  });

  test('getKilometers metodu doğru değeri dönüyor mu?', () => {
    expect(result.getKilometers()).toBe(
      "Arabanın güncel kilometresi 153000 km'dir."
    );
  });

  test('getYear metodu eklenmiş mi?', () => {
    expect(typeof result.getYear).toBe('function');
  });

  test(`getYear metodu yaşı 11 olan araba için model yılını ${year - 11} olarak dönüyor mu?`, () => {
    expect(result.getYear()).toBe(`Araba ${year - 11} modeldir.`);
  });

  test('changePrice metodu eklenmiş mi?', () => {
    expect(typeof result.changePrice).toBe('function');
  });

  test('changePrice metodu arabanın değerini güncelliyor mu?', () => {
    result.changePrice(10);
    expect(result.fiyat).toBe(880000);
  });

  test('changePrice metodu doğru metni dönüyor mu?', () => {
    const newResult = addMethods(car);
    expect(newResult.changePrice(10)).toBe(
      "Araba'nın güncel fiyatı 880000 TL'dir."
    );
  });
});
