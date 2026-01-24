'use client';


export default function TextHero() {
    return (
      <div className="bg-indigo-600/35 dark:bg-indigo-800/25 px-2 py-20 sm:py-40 sm:px-6 md:px-12 lg:px-20 xl:px-100 xl:py-48">
        <h1 className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl max-w-7xl">
          Information Systems, Design & Development
        </h1>
        <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-10 max-w-4xl">
          Bridging the gap between content, code, and
          design to create sustainable systems.
        </p>
        <div className="text-xs tracking-widest uppercase">
          <p className="text-slate-600 dark:text-slate-500 font-semibold">Previously:</p>
          <span className="text-slate-800 dark:text-slate-300 font-bold">
            Bank of Canada &nbsp;•&nbsp; Lightspeed &nbsp;•&nbsp; OrderEase
          </span>
        </div>
      </div>
    );
}