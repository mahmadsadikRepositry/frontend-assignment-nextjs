import React from 'react';

export default function HeroSection() {
  return (
    <div className="lg:col-span-6">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
        24/7 coverage at a fraction of the cost of in-house receptionists.
      </h2>
      <p className="mt-6 text-lg max-w-xl text-slate-200">
        Don't believe us? Fill out the form on the right, and we'll take you to our pricing page,
        where you can find out just how little 24/7 legal intake will cost you.
      </p>
    </div>
  );
}
