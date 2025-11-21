export function Features() {
    return (
      <section className="py-24 border-t border-foggy/20 bg-linear-to-b from-white to-bone/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-white border border-foggy/40 shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-xl bg-bone/50 flex items-center justify-center text-battleship mb-6 group-hover:bg-bone transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-battleship mb-3">Holistic Wellness</h3>
              <p className="text-gray-500 leading-relaxed">
                Preventative care is at our core. Access nutritionists, yoga classes, and mental health workshops.
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-white border border-foggy/40 shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-xl bg-bone/50 flex items-center justify-center text-battleship mb-6 group-hover:bg-bone transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
              </div>
              <h3 className="text-xl font-bold text-battleship mb-3">Easy Scheduling</h3>
              <p className="text-gray-500 leading-relaxed">
                Book appointments with top-rated specialists directly through our member portal.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-white border border-foggy/40 shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-xl bg-bone/50 flex items-center justify-center text-battleship mb-6 group-hover:bg-bone transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>
              </div>
              <h3 className="text-xl font-bold text-battleship mb-3">24/7 Telehealth</h3>
              <p className="text-gray-500 leading-relaxed">
                Speak to a board-certified doctor from the comfort of your home, any time of day or night.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }