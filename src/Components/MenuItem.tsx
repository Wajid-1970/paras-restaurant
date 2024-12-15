import Link from "next/link";
type MenuItemProps = {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  };
  
  export function MenuItem ({ id, name, description, price, imageUrl }: MenuItemProps) {
    return (
      <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-200">
        <img src={imageUrl} alt={name} className="h-48 w-full object-cover rounded-md" />
        <div className="mt-4">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
          <p className="mt-2 text-sm font-bold text-gray-800">{price}</p>
        </div>
      </div>
    );
  };
  export default MenuItem;