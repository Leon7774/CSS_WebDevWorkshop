export default function Level7() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      {/* Navbar section */}
      <nav className="bg-white shadow flex items-center justify-between px-8 py-4">
        <div className="font-bold text-xl text-blue-600">MyApp</div>
        <div className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-500">
            Features
          </a>
          <a href="#" className="hover:text-blue-500">
            Pricing
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-50 py-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Build your next <span className="text-blue-600">great idea.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The fastest way to launch your startup. We provide the tools, you
            provide the vision. Stop building from scratch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg">
              Get Started Free
            </button>
            <button className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-3 rounded-lg font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need
            </h2>
            <p className="text-gray-600 text-lg">
              We've built in all the best practices so you don't have to think
              about them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">⚡️</div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Global edge network deployment ensures your users get responses
                in milliseconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-grade encryption and automated threat detection keep your
                data safe.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Infinite Scale</h3>
              <p className="text-gray-600">
                Database architectures that automatically scale from 0 to
                millions of concurrent users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero CTA Section */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to dive in?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Join over 4,000+ developers building the future of the web with our
            platform.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Start Building Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; 2026 MyApp. Built for the WebDev Workshop.</p>
      </footer>
    </div>
  );
}
