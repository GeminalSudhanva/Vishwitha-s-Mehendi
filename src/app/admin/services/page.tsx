"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Edit, Trash2 } from "lucide-react";

type Service = {
    id: string;
    name: string;
    priceFrom: number;
    category: string;
};

export default function AdminServices() {
    const [services, setServices] = useState<Service[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadServices = async () => {
            try {
                const res = await fetch("/api/services");
                if (res.ok) {
                    const data = await res.json();
                    setServices(data);
                }
            } catch (error) {
                console.error("Failed to load services:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadServices();
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif text-burgundy-900">Manage Services</h1>
                <Button size="sm">Add New Service</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc) => (
                    <Card key={svc.id}>
                        <CardContent className="p-6 flex flex-col justify-between h-full">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">{svc.category}</span>
                                </div>
                                <h3 className="text-xl font-serif text-burgundy-900 mb-2">{svc.name}</h3>
                                <p className="text-burgundy-900 font-medium">Starts from ₹{svc.priceFrom.toLocaleString("en-IN")}</p>
                            </div>

                            <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-burgundy-50">
                                <button className="p-2 text-burgundy-800 hover:text-gold-600 hover:bg-gold-50 transition-colors rounded">
                                    <Edit size={18} />
                                </button>
                                <button className="p-2 text-burgundy-800 hover:text-rose-600 hover:bg-rose-50 transition-colors rounded">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
