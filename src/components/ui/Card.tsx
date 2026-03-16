import React from "react";

export function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={`bg-white rounded-lg shadow-sm border border-burgundy-100 overflow-hidden ${className}`}>
            {children}
        </div>
    );
}

export function CardHeader({ className = "", children }: { className?: string; children: React.ReactNode }) {
    return <div className={`p-6 border-b border-burgundy-50 ${className}`}>{children}</div>;
}

export function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
    return <div className={`p-6 ${className}`}>{children}</div>;
}
