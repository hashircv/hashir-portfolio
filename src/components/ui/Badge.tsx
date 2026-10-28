import type { ReactNode } from "react";
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-earth-900 bg-earth-900 px-3 py-1.5 text-xs font-medium text-earth-100 shadow-sm">
      {children}
    </span>
  );
}
