import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-[#0E0E0E] text-[#e5e2e1]">
      <Navbar />

      {/* HERO */}
      <section className="p-10">
        <h1 className="text-4xl text-white font-bold">S3ADA Store</h1>
        <p className="text-gray-400 mt-2">
          Fast & Secure Digital Top-Ups
        </p>
      </section>

      {/* 🔥 PRODUCTS */}
      <section className="px-8 py-16">
        <h2 className="text-2xl text-white mb-8">Trending Now</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id || product.name}
              className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition"
            >
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
                className="w-full h-32 object-cover mb-4 rounded"
              />

              <h3 className="text-lg text-white font-semibold">
                {product.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {product.subtitle || "Digital Product"}
              </p>

              <p className="text-purple-400 font-bold mt-2">
                {product.price} EGP
              </p>

              <Link
                to="/checkout"
                className="block mt-4 text-center bg-purple-600 hover:bg-purple-700 py-2 rounded text-white"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-gray-800 py-12 px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-white font-bold">Secure Payments</h4>
            <p className="text-gray-400 text-sm">
              InstaPay, Vodafone Cash & Cards
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold">Instant Delivery</h4>
            <p className="text-gray-400 text-sm">
              Delivered in seconds
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold">24/7 Support</h4>
            <p className="text-gray-400 text-sm">
              WhatsApp support anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
