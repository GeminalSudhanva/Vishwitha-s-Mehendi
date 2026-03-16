"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Trash2, Upload } from "lucide-react";

type GalleryImage = {
    id: string;
    imageUrl: string;
    category: string;
    caption?: string;
};

export default function AdminGallery() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const res = await fetch("/api/gallery");
                if (res.ok) {
                    const data = await res.json();
                    setImages(data);
                }
            } catch (error) {
                console.error("Failed to load images:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadImages();
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif text-burgundy-900">Manage Gallery</h1>
                <Button size="sm" className="flex items-center gap-2">
                    <Upload size={16} /> Upload Image
                </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-burgundy-100 mb-8">
                <h3 className="font-serif text-xl text-burgundy-900 mb-4">Upload New Image</h3>
                <div className="border-2 border-dashed border-burgundy-200 rounded-lg p-8 text-center cursor-pointer hover:bg-burgundy-50 transition-colors">
                    <div className="flex flex-col items-center gap-2 text-gray-500">
                        <Upload size={32} className="text-gold-500 mb-2" />
                        <p className="font-medium text-burgundy-900">Drag & drop or click to select image</p>
                        <p className="text-sm">Supports JPG, PNG up to 5MB</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img) => (
                    <div key={img.id} className="group relative h-48 rounded bg-gray-100 overflow-hidden">
                        <img src={img.imageUrl} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <button className="bg-white p-2 rounded-full text-rose-600 hover:bg-rose-50 transition-colors shadow-lg">
                                <Trash2 size={20} />
                            </button>
                        </div>
                        <div className="absolute bottom-2 left-2">
                            <span className="bg-ivory text-burgundy-900 px-2 py-1 text-[10px] uppercase font-bold rounded shadow">{img.category}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
