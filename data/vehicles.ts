// data/vehicles.ts

export type Vehicle = {
  id: string;
  name: string;
  brand: string;
  price: number;
  fuel: string;
  year: number;
  image: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Toyota Land Cruiser Prado",
    brand: "Toyota",
    price: 8500000,
    fuel: "Diesel",
    year: 2021,
    image: "/cars/prado.jpg",
  },
  {
    id: "2",
    name: "Nissan X-Trail",
    brand: "Nissan",
    price: 3200000,
    fuel: "Petrol",
    year: 2019,
    image: "/cars/xtrail.jpg",
  },
  {
    id: "3",
    name: "BMW X5",
    brand: "BMW",
    price: 6700000,
    fuel: "Diesel",
    year: 2020,
    image: "/cars/x5.jpg",
  },
  {
    id: "4",
    name: "Mazda CX-5",
    brand: "Mazda",
    price: 3800000,
    fuel: "Petrol",
    year: 2018,
    image: "/cars/cx5.jpg",
  },
];