import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import BookingCalendar from './BookingCalendar';

// "Book a Brand Growth Audit" modal: the live Google Calendar booking in the site's booking card.
export default function DiscoveryModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (typeof window.fbq === 'function') window.fbq('track', 'InitiateCheckout', { content_name: 'Brand Growth Audit' });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop bk-backdrop" onClick={onClose}>
      <div className="bk-modal" role="dialog" aria-modal="true" aria-label="Book a Brand Growth Audit" onClick={(e) => e.stopPropagation()}>
        <button className="bk-close" onClick={onClose} aria-label="Close booking calendar">
          <X size={20} />
        </button>
        <BookingCalendar compact />
      </div>
    </div>
  );
}
