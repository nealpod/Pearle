export function Stats() {
    return (
      <section className="py-20 text-center bg-white">
        <div className="container mx-auto px-4">
          <p className="text-sm font-bold text-sage uppercase tracking-widest mb-4">Trusted by Millions</p>
          <h2 className="text-3xl font-bold text-battleship mb-12">Protecting what matters most</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-battleship mb-2">98%</div>
              <div className="text-gray-500 text-sm">Claims Paid Instantly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-battleship mb-2">10k+</div>
              <div className="text-gray-500 text-sm">Network Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-battleship mb-2">24/7</div>
              <div className="text-gray-500 text-sm">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-battleship mb-2">4.9/5</div>
              <div className="text-gray-500 text-sm">App Store Rating</div>
            </div>
          </div>
        </div>
      </section>
    );
  }