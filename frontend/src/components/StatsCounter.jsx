import { useState, useEffect, useRef } from 'react';

const StatsCounter = ({ number, label, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    // Extract number and suffix dynamically
    // Example: "50K+" -> numeric: 50, suffix: "K+"
    const match = number.match(/(\d+)(.*)/);
    const numericValue = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : '';

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const end = numericValue;
                    if (start === end) return;

                    let startTime = null;

                    const step = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        setCount(Math.floor(progress * end));

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(end); // Ensure final value is exact
                        }
                    };

                    window.requestAnimationFrame(step);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [numericValue, duration]);

    return (
        <div ref={ref} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:transform hover:-translate-y-1 transition-transform duration-300 border border-white/20 shadow-lg">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono drop-shadow-md">
                {count}{suffix}
            </div>
            <div className="text-blue-100 font-medium text-lg drop-shadow-sm">{label}</div>
        </div>
    );
};

export default StatsCounter;
