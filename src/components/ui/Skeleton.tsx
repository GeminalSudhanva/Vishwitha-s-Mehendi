export function Skeleton({ className = "" }: { className?: string }) {
    return (
        <div className={`animate-pulse bg-burgundy-100/50 rounded ${className}`} />
    );
}

export function GallerySkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-64 w-full" />
            ))}
        </div>
    );
}
