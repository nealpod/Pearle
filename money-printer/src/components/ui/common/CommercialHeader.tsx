import Link from "next/link"; // Import Link
import { Button } from "@/components/ui/common/Button";

export function CommericalHeader() {
return (
<header className="absolute top-0 z-50 w-full pt-6 px-4 md:px-6">
<div className="flex h-20 items-center justify-between px-6 md:px-8">
{/* Left: Logo */}
<div className="flex items-center gap-2">
<span className="text-2xl md:text-2xl font-black tracking-tighter text-white">
Money Printer
</span>
</div>

{/* Center: Navigation */}
<nav className="hidden md:flex items-center gap-8 text-lg font-semibold text-white/95">
{['Home', 'Browse Products','Customer Reviews', 'Pricing'].map((item) => (
    <a
    key={item}
    href="#"
    className="opacity-90 hover:opacity-100 hover:text-white transition-all duration-300 hover:scale-110"
    >
{item}
</a>
))}
</nav>

{/* Right: Actions */}
<div className="flex items-center gap-6">
    <Link href="/login" className="text-base font-bold text-white hover:text-blue-200 transition-colors">
        Log in
    </Link>

    {/* Updated Link to /signup */}
    <Link href="/signup">
        <button className="rounded-full bg-white text-slate-900 px-6 py-2.5 text-base font-bold transition hover:bg-blue-50 hover:scale-105 active:scale-95 cursor-pointer">
            Get Started →
        </button>
    </Link>
</div>
</div>
</header>
);
}