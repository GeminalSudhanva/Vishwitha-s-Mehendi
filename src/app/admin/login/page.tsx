"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import toast from "react-hot-toast";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (res?.error) {
                toast.error("Invalid credentials.");
            } else {
                toast.success("Welcome back!");
                router.push("/admin");
            }
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-ivory flex items-center justify-center p-6 w-full -mt-16 sm:-mt-0">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-serif text-burgundy-900 mb-2">Saundarya Admin</h1>
                    <p className="text-burgundy-800">Please sign in to access your dashboard.</p>
                </div>

                <Card>
                    <CardContent className="p-8">
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-burgundy-900 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 border border-burgundy-200 rounded focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                                    placeholder="admin@saundarya.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-burgundy-900 mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 border border-burgundy-200 rounded focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full mt-4" isLoading={isLoading}>
                                Sign In
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
