"use client";
type FilterValues = {
    brand: string;
    fuel: string;
    price: string;
};

type Props = {
    onFilterChange: (filters: FilterValues) => void;
}

export function VehicleFilter({onFilterChange}: Props) {
    function handleChange(
        e: React.ChangeEvent<HTMLSelectElement>
    ){
       
    }
return (
    <div className="bg-white p-4 rounded shadow mb - 6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
            name="brand"
            onChange={handleChange}
            className="border p-2 rounded"
            >
                <option value="">ALL BRANDS</option>
                <option value="Toyota">Toyota</option>
                <option value="Nissan">Toyota</option>
                <option value="BMW">Toyota</option>
            </select>
            <select 
            name="fuel"
            onChange={handleChange}
            className="border p-2 rounded">
                <option value="">ALL FUEL TYPES</option>
                <option value="">PETROL</option>
                <option value="">DIESEL</option>
            </select>
            <select
            name="price"
            onChange={handleChange}
            className="border p-2 rounded">

             <option value="">ALL PRICES</option>
                <option value="1000000">BELOW 1M</option>
                <option value="3000000">BELOW 3M</option> 
                <option value="5000000">BELOW 5M</option>  
            </select>
        </div>
    </div>
);
}
