function getRandomPositiveInt (a, b) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1) + min)
}
getRandomPositiveInt(1, 8);

function getRandomPositiveFloat (a, b, precision) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const num = Math.random() * (max - min + 1) + min;
  return +num.toFixed(precision)
}
getRandomPositiveFloat(9, 1, 3);

// Create offers objects

const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OFFER_CHECKIN = ['12:00', '13:00', '14:00'];
const OFFER_CHECKOUT = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInt(0, elements.length - 1)];
};

let id = 0;

const createOffer = () => {
  id++;
  return {
    author: {
      avatar: 'img/avatars/user' + (id === 10 ? '' : '0') + id + '.png'
    },
    offer: {
      title: 'Некое помещение',
      address: '{{location.lat}}, {{location.lng}}',
      price: getRandomPositiveInt(1, 100000),
      type: getRandomArrayElement(OFFER_TYPE),
      rooms: getRandomPositiveInt(1, 15),
      guests: getRandomPositiveInt(1, 200),
      checkin: getRandomArrayElement(OFFER_CHECKIN),
      checkout: getRandomArrayElement(OFFER_CHECKOUT),
      features: [

      ],
      description: 'Длинное, а возможно короткое или среднее описание помещения',
      photos: [

      ],
      location: {

      }
    },
  };
};

const similarOffers = Array.from({length: 10}, createOffer);

console.log(similarOffers);
