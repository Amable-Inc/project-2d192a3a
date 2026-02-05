import { Leaf, Sun, Heart, ShoppingCart, Truck, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-amber-900">MangoDelight</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition">About</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition">Products</a>
              <a href="#benefits" className="text-gray-700 hover:text-amber-600 transition">Benefits</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
            </div>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
                Experience the Taste of Paradise
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Indulge in the world's finest mangoes, handpicked at peak ripeness and delivered fresh to your doorstep. Pure tropical bliss in every bite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
                  Shop Premium Mangoes
                </button>
                <button className="border-2 border-amber-500 text-amber-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition">
                  Learn More
                </button>
              </div>
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-amber-600">100%</div>
                  <div className="text-sm text-gray-600">Organic</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">Fresh</div>
                  <div className="text-sm text-gray-600">Daily Harvest</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">5★</div>
                  <div className="text-sm text-gray-600">Rated</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">🥭</div>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4">Why Choose Our Mangoes?</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We bring you the finest tropical experience with every mango, carefully selected for exceptional quality.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Sun-Ripened Perfection</h3>
              <p className="text-gray-700">
                Our mangoes are allowed to ripen naturally on the tree, ensuring maximum sweetness and flavor that you can taste in every bite.
              </p>
            </article>

            <article className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Health Benefits</h3>
              <p className="text-gray-700">
                Packed with vitamins A, C, and antioxidants, our mangoes support immunity, skin health, and overall wellness naturally.
              </p>
            </article>

            <article className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-700">
                From our farms to your table within 48 hours. We guarantee freshness with our expedited shipping process nationwide.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4">Our Premium Selection</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Choose from our handpicked varieties, each offering a unique taste experience.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alphonso", desc: "The King of Mangoes", price: "$24.99", emoji: "🥭" },
              { name: "Ataulfo", desc: "Honey Sweet Delight", price: "$19.99", emoji: "🥭" },
              { name: "Kent", desc: "Tropical Paradise", price: "$22.99", emoji: "🥭" }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-8xl">
                  {product.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                    <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                🌴🥭🌺
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Grown with Love, Delivered with Care</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For over 30 years, our family-owned farms have been cultivating the finest mangoes in the world. We use sustainable farming practices and traditional growing methods to ensure each mango reaches its full potential.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our commitment to quality means we only harvest when the fruit is perfectly ripe, guaranteeing you receive mangoes bursting with natural sweetness and tropical flavor.
              </p>
              <button className="border-2 border-amber-500 text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Taste Paradise?
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Order now and get 20% off your first purchase. Free shipping on orders over $50.
          </p>
          <button className="bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition transform hover:scale-105">
            Shop Now & Save 20%
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">MangoDelight</span>
              </div>
              <p className="text-amber-200">
                Premium mangoes delivered fresh to your door.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#products" className="hover:text-white transition">Products</a></li>
                <li><a href="#benefits" className="hover:text-white transition">Benefits</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-amber-200">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-amber-200">
                <li>Email: hello@mangodelight.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Hours: Mon-Fri 9am-6pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 MangoDelight. All rights reserved. Made with ❤️ for mango lovers.</p>
          </div>
        </div>
      </footer>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MangoDelight",
            "description": "Premium mangoes delivered fresh to your door",
            "url": "https://yourdomain.com",
            "logo": "https://yourdomain.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "Customer Service"
            }
          })
        }}
      />
    </div>
  );
}
