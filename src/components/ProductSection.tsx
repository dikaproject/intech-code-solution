// ProductSection.tsx
'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tech: string[];
}

const products: Product[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard Pro",
    description: "Template admin dashboard modern dengan fitur lengkap",
    price: 799000,
    category: "website",
    image: "/products/ecommerce.jpg",
    tech: ["React", "Next.js", "Tailwind"]
  },
  {
    id: 2,
    title: "E-Commerce Dashboard Pro",
    description: "Template admin dashboard modern dengan fitur lengkap",
    price: 799000,
    category: "website",
    image: "/products/ecommerce.jpg",
    tech: ["React", "Next.js", "Tailwind"]
  },
  {
    id: 3,
    title: "E-Commerce Dashboard Pro",
    description: "Template admin dashboard modern dengan fitur lengkap",
    price: 799000,
    category: "website",
    image: "/products/ecommerce.jpg",
    tech: ["React", "Next.js", "Tailwind"]
  },
  // Add more products...
];

const categories = ["Semua", "Website", "Mobile", "Desktop"];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatPrice = (price: number) => {
    if (!mounted) return ""; // Return empty string during SSR
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const filteredProducts = products.filter(product => 
    activeCategory === "Semua" || product.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <section id='products' className="py-20 bg-[#0D0C22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Source Code Premium
            </span>
          </h2>
          <p className="text-gray-400">Pilihan source code berkualitas untuk projek Anda</p>
        </motion.div>

        {/* Categories Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-cyan-400 text-white"
                  : "text-gray-400 border border-gray-700 hover:border-purple-500"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mounted && filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1E1E3F] rounded-xl overflow-hidden border border-purple-500/20 group"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E3F] to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    {formatPrice(product.price)}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg text-white text-sm font-medium"
                  >
                    Detail
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;