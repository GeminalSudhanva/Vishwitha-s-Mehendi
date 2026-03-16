import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export function Button({
    className = "",
    variant = "primary",
    size = "md",
    isLoading,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded transition-colors uppercase tracking-widest";

    const variants = {
        primary: "bg-burgundy-900 text-ivory hover:bg-gold-500",
        secondary: "bg-gold-500 text-ivory hover:bg-gold-600",
        outline: "border-2 border-burgundy-900 text-burgundy-900 hover:bg-burgundy-900 hover:text-ivory",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${isLoading ? "opacity-70 cursor-not-allowed" : ""} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? "Loading..." : children}
        </button>
    );
}
