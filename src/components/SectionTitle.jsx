import React from 'react';

export default function SectionTitle({ tagline, title, subtitle, align = 'center', dark = false }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {tagline && (
        <span className="text-xs uppercase tracking-widest font-bold text-green-600 block mb-2">
          {tagline}
        </span>
      )}
      <h2 className={`text-2xl md:text-3xl font-bold ${dark ? 'text-white' : 'text-blue-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-slate-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}