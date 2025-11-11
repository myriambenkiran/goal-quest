import { getLevelInfo } from "@/lib/leveling";
import { Avatar } from "@/components/Avatar";
import { StatsCard } from "@/components/StatsCard";

type Avatar = {
  name: string;
  gp: number;
  globalHotness: number;
};

const avatar: Avatar = {
  name: "Sirine",
  gp: 10,
  globalHotness: 25,
};
const levelMap: Record<number, number> = {
  1: 0,
  2: 100,
};
const { level, percentageToNext, gpToNext } = getLevelInfo(avatar.gp, levelMap);

export default function DashboardPage() {
  return (
    /*
            min-h-screen	    makes it at least the full height of the screen (so it fills the window)
            bg-neutral-950	    sets a very dark gray background color (from Tailwind’s neutral palette)
            text-white	        makes all text inside white
            flex	            turns the element into a flexbox container
            flex-col            arranges its children vertically (in a column)
            items-center	    vertically centers its children
            justify-center	    horizontally centers its children
            justify-between     spaces children apart, with space between them
            p-6	                adds padding (space inside the box) — “6” = Tailwind’s spacing scale (about 1.5rem)
            p-5                 adds padding (space inside the box) — “5” = Tailwind’s spacing scale (about 1.25rem)
            bg-neutral-900	    slightly lighter dark gray background for contrast
            rounded-2xl	        gives it big rounded corners
            shadow-xl	        shadow extra large
            shadow-lg           shaddow large (a bit stronger)
            border	            adds a thin border
            border-neutral-800	makes the border color dark gray (so subtle, not white)
            text-xs             very small text (extra small)
            text-sm             smaller text (small)
            text-lg             larger text (large)
            text-xl	            bigger text (extra large)
            text-2xl            even bigger text (2x large)
            text-neutral-400    makes the text a medium gray (less contrast)
            font-semibold	    makes the font a bit thicker
            font-bold           makes the font even thicker
            uppercase           makes text all uppercase
            text-right          aligns text to the right
            tracking-wide       adds extra spacing between letters
            leading-none        reduces line height to tighten up text vertically
            mb-2	            adds a little space below (margin-bottom)
            w-full              makes the section take the full width of its container
            max-w-md            limits the maximum width to medium size (about 28rem)
            gap-4               adds space between flex items (4 = 1rem)
            gap-2               adds space between flex items (2 = 0.5rem)
        */
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col md:flex-row items-center justify-center p-6 gap-8">
      {/* LEFT SIDE (or UP): Avatar art */}
      <div className="flex flex-col items-center">
        <Avatar
          src="/avatars/mainchar_lvl00.png"
          alt="full-body illustrated avatar of the user"
        />
      </div>
      <div className="w-full max-w-md">
        <StatsCard
          {...avatar}
          level={level}
          percentageToNext={percentageToNext}
          gpToNext={gpToNext}
        />
      </div>
    </main>
  );
}
