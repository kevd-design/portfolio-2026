'use client';


export default function TextHero() {
    return (
      <div className="bg-indigo-200/25 px-2 py-20 sm:py-40 sm:px-6 md:px-12 lg:px-20 xl:px-100 xl:py-48">
        <h1 className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl max-w-7xl">
          Information Systems, Design & Development
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl">
          Bridging the gap between content strategy, frontend development, and
          visual design to create stable, scalable systems.
        </p>
        <div className="text-xs tracking-widest uppercase">
          <p className="text-gray-600 font-semibold">Previously:</p>
          <span className="text-gray-800 font-bold">
            Bank of Canada &nbsp;•&nbsp; Lightspeed &nbsp;•&nbsp; OrderEase
          </span>
        </div>
      </div>
    );
}