import Link from "next/link";

type Vehicle = {
    id: string;
    name: string;
    price: number;
    fuel: string;
    year: number;
    image: string;
};

type Props = {
    vehicle: Vehicle;
};

export default function VehicleCard({vehicle}: Props){
    return (
        <div className="border rounded -lg shadow hover:lg transition">
            <img
            src={vehicle.image}
            alt={vehicle.name}
            className="h - 48 w - full object - cover rounded -t-lg"
            />

            <div className="p-4">
                <h3 className="font-bold text-lg">{vehicle.name}</h3> 
               <p className="text-blue-600 font-semibold">
                KES {vehicle.price.toLocaleString()}
                </p> 
                <div className="text-sm text-gray-600 mt -2 flex justify-between">
                    <span>{vehicle.year}</span>
                    <span>{vehicle.fuel}</span>
                </div>
                <Link
                href={`/vehicles/${vehicle.id}`}
                className="inline-block mt-4 text-blue- 600 font -medium"
                >
                    View Details 
                </Link>
            </div>
        </div>
    );
}