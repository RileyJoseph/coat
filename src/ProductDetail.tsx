import { useParams, Link } from "react-router-dom";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
}

const products: Product[] = [
  {
    id: "original-coat-logo-design",
    name: "Coat Logo Tee",
    price: 25.00,
    image: "/images/tshirt-1.jpg",
    description: "Classic Coat logo design on premium cotton. This comfortable and stylish tee features our iconic logo printed with high-quality inks that won't fade. Perfect for concerts and everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "snake-charmer-tee",
    name: "Snake Charmer Tee",
    price: 28.00,
    image: "/images/tshirt-2.jpg",
    description: "Snake Charmer Tee. This unique design captures the essence of Coat's music in visual form. Made from 100% organic cotton for superior comfort and sustainability.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "coat-circle-tee",
    name: "Minimal Circle Tee",
    price: 26.00,
    image: "/images/tshirt-3.jpg",
    description: "Minimalist design for the modern music lover. Clean lines and thoughtful design make this tee a versatile addition to any wardrobe. Premium fabric blend ensures comfort and durability.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState<string>("");

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-blue-400 hover:text-blue-300">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/shop"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-zinc-900 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-9xl">👕</div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-white mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <label htmlFor="size" className="block text-sm font-medium mb-3">
                Select Size
              </label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
              >
                <option value="">Choose a size</option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="snipcart-add-item w-full bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-400"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-url={`/shop/${product.id}`}
              data-item-description={product.description}
              data-item-image="/images/tshirt-placeholder.jpg"
              data-item-name={product.name}
              data-item-custom1-name="Size"
              data-item-custom1-options={product.sizes.join("|")}
              data-item-custom1-value={selectedSize}
              disabled={!selectedSize}
            >
              {selectedSize ? "Add to Cart" : "Please Select a Size"}
            </button>

            <div className="mt-8 border-t border-zinc-800 pt-8">
              <h3 className="font-bold mb-3">Product Details</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• 100% premium cotton</li>
                <li>• Pre-shrunk fabric</li>
                <li>• Side-seamed construction</li>
                <li>• Shoulder-to-shoulder taping</li>
                <li>• Unisex sizing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
