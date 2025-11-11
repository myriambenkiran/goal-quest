type StatsCardProps = {
  name: string;
  gp: number;
  globalHotness: number;
  level: number;
  percentageToNext: number;
  gpToNext: number;
};

export function StatsCard({
  name,
  gp,
  globalHotness,
  level,
  percentageToNext,
  gpToNext,
}: StatsCardProps) {
  return (
    <section className="bg-neutral-900 rounded-2xl p-5 shadow-lg border border-neutral-800 flex flex-col gap-4">
      <header className="flex items-center justify-between">
        {/* name */}
        <div className="flex flex-col">
          <span className="text-sm text-neutral-400">Welcome back</span>
          <span className="text-lg font-semibold">{name} ✨</span>
        </div>

        {/* Level */}
        <div className="text-right">
          <p className="text-xs text-neutral-400 uppercase tracking-wide">
            Level
          </p>
          <p className="text-2xl font-bold leading-none">{level}</p>
        </div>
      </header>

      {/* GP row */}
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xs text-neutral-400 uppercase tracking-wide">
            Glow Points
          </p>
          <p className="text-xl font-semibold leading-none">{gp} GP</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-neutral-400 uppercase tracking-wide">
            Global Hotness
          </p>
          <p className="text-xl font-semibold leading-none">{globalHotness}%</p>
        </div>
      </div>

      {/* Progress bar toward next level */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <span>Level {level}</span>
          <span>Level {level + 1}</span>
        </div>

        <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white"
            style={{ width: `${percentageToNext}%` }}
          />
        </div>

        <p className="text-[11px] text-neutral-500 text-right">
          {gpToNext > 0 ? `${gpToNext} GP to next level` : "Max level"}
        </p>
      </div>
    </section>
  );
}
