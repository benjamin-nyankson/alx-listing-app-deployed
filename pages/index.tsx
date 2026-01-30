import PropertyCard from "@/components/PropertyCard";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "../constants/index"

export default function Home() {
  const [properties, setProperties] = useState<{ id: string, name: string, image: string, price: number, rating: number }[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  const products = useMemo(() => {
    return PROPERTYLISTINGSAMPLE?.map((prod, id) => {
      return {
        id: `${id+1}`,
        name: prod?.name,
        price: prod?.price,
        image: prod?.image,
        rating: prod?.rating
      }
    })
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
}