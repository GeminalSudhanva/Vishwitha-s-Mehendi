import { ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-burgundy-50 flex flex-col md:flex-row">
            <aside className="w-full md:w-64 bg-burgundy-900 text-ivory p-6 flex flex-col">
                <div className="mb-10">
                    <Link href="/admin" className="text-2xl font-serif tracking-wider text-gold-400">Saundarya Admin</Link>
                </div>
                <nav className="flex-1 space-y-4">
                    <Link href="/admin" className="block py-2 px-4 bg-burgundy-800 rounded hover:bg-gold-600 transition-colors uppercase text-sm tracking-widest">Dashboard</Link>
                    <Link href="/admin/bookings" className="block py-2 px-4 hover:bg-burgundy-800 hover:text-gold-400 rounded transition-colors uppercase text-sm tracking-widest">Bookings</Link>
                    <Link href="/admin/services" className="block py-2 px-4 hover:bg-burgundy-800 hover:text-gold-400 rounded transition-colors uppercase text-sm tracking-widest">Services</Link>
                    <Link href="/admin/gallery" className="block py-2 px-4 hover:bg-burgundy-800 hover:text-gold-400 rounded transition-colors uppercase text-sm tracking-widest">Gallery</Link>
                </nav>
                <div className="mt-auto pt-6 border-t border-burgundy-800">
                    <Link href="/" className="text-sm text-burgundy-200 hover:text-ivory uppercase tracking-widest">&larr; Back to Site</Link>
                </div>
            </aside>

            <main className="flex-1 p-8 overflow-auto pb-24 md:pb-8">
                {children}
            </main>
        </div>
    );
}
