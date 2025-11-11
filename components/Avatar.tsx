import Image from "next/image";
type AvatarProps = {
  src: string;
  alt: string;
};

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <section className="relative w-32 h-48 md:w-40 md:h-60 flex items-center justify-center mt-6 md:mt-0 transition-all duration-300">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-purple-500/20 via-transparent to-transparent blur-xl" />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      />
    </section>
  );
}
