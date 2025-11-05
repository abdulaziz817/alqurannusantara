export default function SurahSkeleton() {
  return (
    <div className="px-6 md:px-24 py-8 space-y-10">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center animate-pulse">
        <div className="h-6 w-28 bg-gray-300 dark:bg-slate-700 rounded-full"></div>
        <div className="h-6 w-28 bg-gray-300 dark:bg-slate-700 rounded-full"></div>
      </div>

      {/* Title Skeleton */}
      <div className="flex flex-col items-center animate-pulse space-y-2">
        <div className="h-8 w-40 bg-gray-300 dark:bg-slate-700 rounded-lg"></div>
        <div className="h-3 w-44 bg-gray-300 dark:bg-slate-700 rounded"></div>
      </div>

      {/* List Skeleton */}
      <div className="space-y-8 pt-8">
        {[1, 2, 3, 4].map((_, idx) => (
          <div
            key={idx}
            className="animate-pulse transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="grid justify-items-end gap-2">
              <div className="h-9 w-56 bg-gray-300 dark:bg-slate-700 rounded-lg"></div>
              <div className="h-3 w-44 bg-gray-300 dark:bg-slate-700 rounded-lg"></div>
            </div>
            <div className="my-4 h-3 w-40 md:w-72 bg-gray-300 dark:bg-slate-700 rounded-lg"></div>
            <div className="border-t border-gray-200 dark:border-slate-700 opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Footer Skeleton */}
      <div className="flex justify-between items-center animate-pulse">
        <div className="h-6 w-28 bg-gray-300 dark:bg-slate-700 rounded-full"></div>
        <div className="h-6 w-28 bg-gray-300 dark:bg-slate-700 rounded-full"></div>
      </div>
    </div>
  );
}
