// components/BookingWidget.tsx
import { useEffect, useRef } from 'react';

const BookingWidget = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the Calendly script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      data-url="https://calendly.com/phasukdianas15/herb-and-spice-booking"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

export default BookingWidget;