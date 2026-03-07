import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSlider = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);

    // Responsive settings
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setCardsToShow(1);
            else if (window.innerWidth < 1024) setCardsToShow(2);
            else if (window.innerWidth < 1280) setCardsToShow(3);
            else setCardsToShow(4);
        };

        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + cardsToShow >= testimonials.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - cardsToShow : prev - 1
        );
    };

    return (
        <div className="relative max-w-[1400px] mx-auto px-12">
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors text-blue-600 disabled:opacity-50"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors text-blue-600 disabled:opacity-50"
            >
                <ChevronRight size={24} />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden py-8">
                <div
                    className="flex transition-transform duration-500 ease-out gap-6"
                    style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
                >
                    {testimonials.map((review) => (
                        <div
                            key={review.id}
                            className="flex-shrink-0"
                            style={{ width: `calc(${100 / cardsToShow}% - ${(24 * (cardsToShow - 1)) / cardsToShow}px)` }}
                        >
                            <div className="bg-white shadow-lg p-8 h-[450px] flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote size={40} className="text-blue-600" />
                                </div>

                                {/* 1. Image (Top, Centered) */}
                                <div className="mb-6 mt-2">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-50 shadow-md"
                                    />
                                </div>

                                {/* 2. Name */}
                                <h3 className="font-bold text-xl text-gray-800 mb-1">{review.name}</h3>
                                <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mb-6">{review.bookedType}</p>

                                {/* 3. Review Text */}
                                <p className="text-gray-600 text-base leading-relaxed italic mb-8 line-clamp-5 relative px-2">
                                    "{review.reviewText}"
                                </p>

                                {/* 4. Rating Stars (Bottom) */}
                                <div className="mt-auto flex gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
