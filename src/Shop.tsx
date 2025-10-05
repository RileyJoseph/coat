import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: "original-coat-logo-design",
    name: "Coat Logo Tee",
    price: 25.00,
    image: "/images/tshirt-1.jpg",
    description: "Classic Coat logo design on premium cotton"
  },
  {
    id: "snake-charmer-tee",
    name: "Snake Charmer Tee",
    price: 25.00,
    image: "/images/tshirt-2.jpg",
    description: "Snake Charmer Tee"
  },
  {
    id: "coat-circle-tee",
    name: "Coat Circle Tee",
    price: 25.00,
    image: "/images/tshirt-3.jpg",
    description: "Psychedelic Coat Circle Tee Design"
  }
];

const Shop: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-4 text-center">Shop</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Support Coat with exclusive merch. Premium quality apparel designed for fans.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/shop/${product.id}`}
              className="group bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square bg-zinc-800 flex items-center justify-center">
                <div className="text-6xl">👕</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
