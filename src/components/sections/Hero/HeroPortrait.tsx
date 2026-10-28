import { profile } from '../../../data/profile';

interface HeroPortraitProps {
  compact?: boolean;
}

export function HeroPortrait({ compact = false }: HeroPortraitProps) {
  if (!profile.imageUrl) return null;

  if (compact) {
    return (
      <div
        className="relative size-[128px] shrink-0 min-[375px]:size-[140px]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-full border border-accent-500/30" />
        <div className="relative size-full overflow-hidden rounded-full border border-white/80 bg-paper-200 shadow-soft">
          <img
            src={profile.avatarUrl ?? profile.imageUrl}
            alt=""
            width="304"
            height="304"
            fetchPriority="high"
            className="hero-avatar-image size-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="hero-portrait relative mx-auto w-full">
      <div className="absolute -bottom-5 -right-5 size-full rounded-[1.25rem] border border-accent-500/25" />
      <div className="hero-portrait-surface relative aspect-[4/5] overflow-hidden rounded-[1.25rem] shadow-glow">
        <img
          src={profile.imageUrl}
          alt={profile.imageAlt}
          width="1024"
          height="1536"
          fetchPriority="high"
          className="hero-portrait-image absolute inset-0 size-full object-cover object-[62%_16%]"
        />
      </div>
      <div className="absolute -bottom-8 left-5 rounded-lg border border-ink-950/10 bg-paper-50 px-4 py-3 shadow-soft">
        <p className="text-[10px] font-bold uppercase tracking-[.18em] text-accent-500">
          B.Tech · Information Technology
        </p>
        <p className="mt-1 text-sm font-semibold text-ink-950">Open to development roles</p>
      </div>
    </div>
  );
}
