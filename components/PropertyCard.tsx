import Link from "next/link";

interface PropertyCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  name,
  image,
  price,
  rating,
}) => {
  return (
    <Link href={`/property/${id}`}>
      <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-3">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">Price: ${price}</p>
          <p className="text-sm text-yellow-500">Rating: {rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard