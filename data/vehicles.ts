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
    name: "Toyota Land Cruiser 200 series",
    brand: "Toyota",
    price: 8500000,
    fuel: "Diesel",
    year: 2017,
    image: "public\vehicles\toyota-land-cruiser-sahara.jpg",
  },
  {
    id: "2",
    name: "Audi A5 S line",
    brand: "Audi",
    price: 3200000,
    fuel: "Petrol",
    year: 2019,
    image: "public\vehicles\audi-a5-s-line.jpg",
  },
  {
    id: "3",
    name: "BMW M5",
    brand: "BMW",
    price: 6700000,
    fuel: "Diesel",
    year: 2020,
    image: "public\vehicles\bmw-m5.jpg",
  },
  {
    id: "4",
    name: "Mercedes-Benz GLC",
    brand: "Mercedes",
    price: 3800000,
    fuel: "Diesel",
    year: 2019,
    image: "public\vehicles\mercedes-glc-220d-2019.jpg",
  },
  {
    id: "5",
    name: "Jeep",
    brand: "Toyota",
    price: 3800000,
    fuel: "Diesel",
    year: 2019,
    image: "public\vehicles\jeep.jpg",
  },
   {
    id: "6",
    name: "Bently",
    brand: "Toyota",
    price: 3800000,
    fuel: "Petrol",
    year: 2019,
    image: "public\vehicles\bentley-dynamic-ride.jpg",
  },
     {
    id: "7",
    name: "mercedes-s500-2022",
    brand: "Mercedes",
    price: 3800000,
    fuel: "Petrol",
    year: 2022,
    image: "public\vehicles\mercedes-s500-2022.jpg",
  },
     {
    id: "8",
    name: "mercedes-e63s-amg-2018",
    brand: "Mercedes",
    price: 3800000,
    fuel: "Petrol",
    year: 2019,
    image: "public\vehicles\mercedes-e63s-amg-2018.png",
  },
    {
    id: "9",
    name: "range-rover-vogue-2023",
    brand: "Toyota",
    price: 3800000,
    fuel: "Diesel",
    year: 2023,
    image: "public\vehicles\range-rover-vogue-2023.jpg",
  },
     {
    id: "10",
    name: "range-rover-vogue-autobiography-2023",
    brand: "Toyota",
    price: 3800000,
    fuel: "Diesel",
    year: 2023,
    image: "public\vehicles\range-rover-vogue-autobiography-2023.jpg",
  },
   {
    id: "11",
    name: "range-rover-vogue-autobiography-2023",
    brand: "Toyota",
    price: 3800000,
    fuel: "Diesel",
    year: 2023,
    image: "public\vehicles\range-rover-vogue-autobiography-2023.jpg",
  },
  {
    id: "12",
    name: "mercedes-awd-4matic",
    brand: "Mercedes",
    price: 3800000,
    fuel: "Petrol",
    year: 2023,
    image: "public\vehicles\mercedes-awd-4matic.jpg",
  },
];