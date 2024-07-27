function addMethods(features) {
  /* kodlar buraya */
  const date = new Date();
  let year = date.getFullYear();

  const carFeatures = {
    ...features,
    getKilometers: function () {
      return 'Arabanın güncel kilometresi ' + features.kilometre + " km'dir.";
    },
    getYear: function () {
      return 'Araba ' + (year - features.yas) + ' modeldir.';
    },
    changePrice(percantage) {
      carFeatures.fiyat = (features.fiyat * (100 + percantage)) / 100;
      return "Araba'nın güncel fiyatı " + carFeatures.fiyat + " TL'dir.";
    },
  };

  return carFeatures;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = addMethods;
