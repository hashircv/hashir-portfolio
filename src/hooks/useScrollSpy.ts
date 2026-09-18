import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? '');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setActiveId(visible.target.id); }, { rootMargin: '-25% 0px -60%', threshold: [0, .2, .6] });
    ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el)).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return activeId;
}
