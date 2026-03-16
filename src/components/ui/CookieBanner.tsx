"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsent = localStorage.getItem("saundarya-cookie-consent");
        if (!hasConsent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("saundarya-cookie-consent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-burgundy-900 text-ivory p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-burgundy-100 max-w-3xl">
                    We use cookies to improve your experience on our site, analyze site traffic, and assist in our marketing efforts.
                    By clicking "Accept", you agree to the storing of cookies on your device.
                </p>
                <div className="flex gap-4 shrink-0">
                    <Button variant="secondary" size="sm" onClick={acceptCookies}>
                        Accept
                    </Button>
                    <button onClick={() => setIsVisible(false)} className="text-sm font-medium hover:text-gold-400 uppercase tracking-widest text-burgundy-200">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
