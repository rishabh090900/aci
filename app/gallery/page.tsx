"use client";

import { useState } from 'react';
import { galleryImages, galleryCategories } from '@/data/gallery';
import Image from 'next/image';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-green-100">
              Moments That Define Our Journey
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                {/* Placeholder - Replace with actual images */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">📸</span>
                    <p className="text-sm font-semibold text-gray-700">{image.category}</p>
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-semibold text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
          >
            ×
          </button>
          {selectedImage > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage - 1); }}
              className="absolute left-4 text-white text-4xl hover:text-gray-300"
            >
              ‹
            </button>
          )}
          {selectedImage < filteredImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage + 1); }}
              className="absolute right-4 text-white text-4xl hover:text-gray-300"
            >
              ›
            </button>
          )}
          <div className="max-w-4xl max-h-full">
            <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">📸</span>
                <p className="text-xl font-semibold text-gray-800">{filteredImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
