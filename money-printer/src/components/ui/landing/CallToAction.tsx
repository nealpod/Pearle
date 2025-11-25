import { Button } from "@/components/ui/common/Button";

export function CallToAction() {
  return (
    <section className="py-20 bg-white">
       <div className="container mx-auto px-4">
           <div className="relative rounded-3xl bg-slate-900 overflow-hidden px-8 py-24 text-center shadow-2xl">
               <div className="relative z-10">
                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to see clearly?</h2>
                   {/* UPDATED BUTTON: Using the secondary variant for white button on dark background */}
                   <Button variant="secondary" size="lg">
                      Browse Products
                   </Button>
               </div>
               
               {/* Gradients */}
               <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/50 rounded-full blur-[120px]"></div>
               <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-purple-600/50 rounded-full blur-[120px]"></div>
               <div className="absolute inset-0 bg-indigo-500/10 blur-3xl"></div>
           </div>
       </div>
    </section>
  );
}