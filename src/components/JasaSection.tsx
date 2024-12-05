// JasaSection.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Jasa pembuatan website profesional dengan teknologi modern",
    priceRange: "100.000 - 2.000.000",
    icon: "🌐",
    features: [
      "Responsive Design",
      "SEO Friendly",
      "Modern UI/UX",
      "Custom Domain",
      "Database Integration",
      "Admin Dashboard",
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Pengembangan aplikasi mobile Android & iOS",
    priceRange: "150.000 - 3.500.000",
    icon: "📱",
    features: [
      "Native Performance",
      "Push Notifications",
      "Offline Mode",
      "API Integration",
      "Play Store Ready",
      "Regular Updates",
    ],
  },
  {
    id: 3,
    title: "Error Fix & Debug",
    description: "Perbaikan bug dan error pada project anda",
    priceRange: "30.000 - 500.000",
    icon: "🛠️",
    features: [
      "Quick Response",
      "Code Review",
      "Bug Fixing",
      "Performance Optimization",
      "Security Check",
      "Documentation",
    ],
  },
  {
    id: 4,
    title: "Desktop App Development",
    description: "Pengembangan aplikasi desktop untuk Windows & macOS",
    priceRange: "200.000 - 4.000.000",
    icon: "💻",
    features: [
      "Quick Response",
      "Code Review",
      "Bug Fixing",
      "Performance Optimization",
      "Security Check",
      "Documentation",
    ],
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Desain modern dan responsif untuk website & aplikasi",
    priceRange: "50.000 - 1.000.000",
    icon: "🎨",
    features: [
      "Wireframing",
      "Prototyping",
      "UI Design",
      "UX Research",
      "Design System",
      "Mockups",
    ],
  },
  {
    id: 6,
    title: "Landing Page",
    description: "Halaman website yang dioptimalkan untuk konversi",
    priceRange: "50.000 - 1.000.000",
    icon: "📄",
    features: [
      "SEO Friendly",
      "Conversion Focused",
      "Lead Capture",
      "A/B Testing",
      "Analytics",
      "Responsive Design",
    ],
  },
];

const techStacks = {
  frontend: [
    {
      name: "React.js",
      icon: "/icons/reactjs.png",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: "/icons/nextjs.png",
      color: "#000000",
    },
    {
      name: "Tailwind CSS",
      icon: "/icons/tailwindcss.png",
      color: "#38B2AC",
    },
    {
      name: "Flutter (Dart)",
      icon: "/icons/flutter.png",
      color: "#319795",
    },
  ],
  backend: [
    {
      name: "Laravel",
      icon: "/icons/laravel-icon.png",
      color: "#FF2D20",
    },
    {
      name: "Node.js",
      icon: "/icons/nodejs.png",
      color: "#339933",
    },
    {
      name: "Nestjs",
      icon: "/icons/nestjs.png",
      color: "#F59E0B",
    },
    {
      name: "Express.js",
      icon: "/icons/express-js.png",
      color: "#000000",
    },
  ],
  database: [
    {
      name: "MongoDB",
      icon: "/icons/mongodb.png",
      color: "#47A248",
    },
    {
      name: "MySQL",
      icon: "/icons/mysql.png",
      color: "#4479A1",
    },
    {
      name: "PostgreSQL",
      icon: "/icons/postgresql.png",
      color: "#336791",
    },
  ],
  "Programming Language": [
    {
      name: "PHP",
      icon: "/icons/php.png",
      color: "#777BB4",
    },
    {
      name: "C#",
      icon: "/icons/c.png",
      color: "#3776AB",
    },
    {
      name: "JavaScript",
      icon: "/icons/javascript.png",
      color: "#F7DF1E",
    },
  ],
};

const JasaSection = () => {
  return (
    <section className="py-20 bg-[#0D0C22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Jasa Pengembangan
            </span>
          </h2>
          <p className="text-gray-400 mb-8">
            Solusi digital untuk kebutuhan project Anda
          </p>
          <p className="text-gray-400 mb-12">
            Khusus untuk tugas proyek tingkat SMK kebawah mendapatkan harga yang
            tidak terlalu mahal, lengkap beserta dokumentasinya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E1E3F] rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full" // Added flex flex-col and h-full
            >
              <div>
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <div className="mb-8">
                  <div className="text-sm text-gray-400 mb-2">Mulai dari</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    Rp {service.priceRange}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-purple-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Button at the bottom */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium hover:shadow-lg transition-all duration-300 mt-auto" // Added mt-auto
              >
                Konsultasi Gratis
              </motion.button>
            </motion.div>
          ))}
        </div>
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-gray-400">Teknologi yang sering kami gunakan untuk melakukan develop website, aplikasi dan dekstop.</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {Object.entries(techStacks).map(
              ([category, technologies], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="mb-16"
                >
                  <h3 className="text-2xl font-semibold text-gray-300 mb-8 text-center capitalize">
                    {category}
                  </h3>
                  <div
                    className={`grid gap-6 ${
                      technologies.length === 3
                        ? "grid-cols-1 md:grid-cols-3"
                        : "grid-cols-2 md:grid-cols-4"
                    } justify-items-center mx-auto max-w-5xl`}
                  >
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                        }}
                        className="relative flex flex-col items-center p-6 bg-[#1E1E3F] rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 w-full max-w-[250px]"
                      >
                        <div className="w-16 h-16 mb-4 relative group">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            className="object-contain transition-all duration-300 group-hover:scale-110"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                            style={{
                              background: `radial-gradient(circle at center, ${tech.color}20 0%, transparent 70%)`,
                            }}
                          />
                        </div>
                        <span className="text-gray-300 font-medium">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JasaSection;
