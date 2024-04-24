import { colors } from "../constants";
import { CarType, filterType } from "../types";

const options = {
  headers: {
    'X-RapidAPI-Key': '43a4bcfacbmsh41fb0954010834bp1b5e4ejsn32f6d78b61d4',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  },
};

export async function fetchCars(filters: filterType) {
  const {
    make = "bmw",
    model = "",
    limit = "",
    year = "",
    fuel = "",
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel}&year=${year}&limit=${limit}`,
    options
  );
  return await res.json();
}


// fotoğraf url'i oluşturan bir method
export const genereteImage = (car: CarType, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("zoomType", "fullscreen");

  if (angle) {
    url.searchParams.append("angle", angle);
  }
  // rastgele renk kodu seç
  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  return String(url);
};
