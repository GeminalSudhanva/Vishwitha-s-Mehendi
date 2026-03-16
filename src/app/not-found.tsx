import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center container mx-auto px-6 text-center">
            <h1 className="text-9xl font-serif text-gold-400 opacity-50 mb-4">404</h1>
            <h2 className="text-4xl font-serif text-burgundy-900 mb-6">Page Not Found</h2>
            <p className="text-lg text-burgundy-800 mb-10 max-w-md mx-auto">
                The design you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/">
                <Button size="lg">Return Home</Button>
            </Link>
        </div>
    );
}
