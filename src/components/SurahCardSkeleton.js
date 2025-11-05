export default function SurahCardSkeleton() {
  return (
    <div className="bg-white dark:bg-base-200 rounded-2xl border-2 border-base-300 p-5 max-w-sm w-full h-full mx-auto shadow-sm">
      <div className="animate-pulse flex items-center gap-4">
        {/* Icon Placeholder */}
        <div className="h-12 w-12 rounded-xl bg-gray-300 dark:bg-slate-700"></div>

        {/* Text Placeholder */}
        <div className="flex-1 space-y-3">
          <div className="flex justify-between items-start">
            {/* Left Text */}
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-300 dark:bg-slate-700 rounded"></div>
              <div className="h-2 w-16 bg-gray-300 dark:bg-slate-700 rounded"></div>
            </div>

            {/* Right Text */}
            <div className="space-y-2 text-right">
              <div className="h-4 w-24 bg-gray-300 dark:bg-slate-700 rounded"></div>
              <div className="h-2 w-20 bg-gray-300 dark:bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
