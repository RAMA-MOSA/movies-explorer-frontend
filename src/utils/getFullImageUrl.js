import isValidUrl from './isValidUrl';

import not_image from '../images/not-image.png';

const base_url = 'https://api.nomoreparties.co';
const base_front_url = 'https://m-e.students.nomoredomains.monster';

const getFullImageUrl = (data) => {
  if (isValidUrl(data.image)) {
    return data.image;
  }
  if (!data.image) {
    return `${base_front_url}${not_image}`;
  }
  return `${base_url}${data.image.url}`;
};

export default getFullImageUrl;
