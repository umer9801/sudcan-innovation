import type { LucideIcon } from "lucide-react";

type CardColor = "olive" | "red" | "brass" | "sage";

const colorMap: Record<CardColor, { bg: string; iconBg: string; iconColor: string; valueColor: string }> = {
  olive: {
    bg:         "rgba(53,72,58,0.10)",
    iconBg:     "#35483A",
    iconColor:  "#C6A15B",
    valueColor: "#35483A",
  },
  red: {
    bg:         "rgba(181,46,50,0.09)",
    iconBg:     "#B52E32",
    iconColor:  "#FFFDF8",
    valueColor: "#B52E32",
  },
  brass: {
    bg:         "rgba(198,161,91,0.12)",
    iconBg:     "#C6A15B",
    iconColor:  "#202321",
    valueColor: "#a8843e",
  },
  sage: {
    bg:         "rgba(104,121,103,0.10)",
    iconBg:     "#687967",
    iconColor:  "#F5F0E6",
    valueColor: "#35483A",
  },
};

export function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color = "olive",
}: {
  icon: LucideIcon;
  label: string;
  value: number;
  sub: string;
  color?: CardColor;
}) {
  const c = colorMap[color];

  return (
    <div
      className="p-6"
      style={{
        borderRadius: "1.25rem",
        background: "#FFFDF8",
        boxShadow:
          "0 2px 0 0 rgba(32,35,33,0.08), 0 8px 24px -4px rgba(32,35,33,0.11), inset 0 1px 0 rgba(255,255,255,0.68)",
        border: "1px solid rgba(198,161,91,0.20)",
      }}
    >
      <div
        className="mb-4 inline-flex h-10 w-10 items-center justify-center"
        style={{
          borderRadius: "0.75rem",
          background: c.iconBg,
          boxShadow: "0 2px 6px rgba(32,35,33,0.20), inset 0 1px 0 rgba(255,255,255,0.14)",
        }}
      >
        <Icon size={18} style={{ color: c.iconColor }} />
      </div>
      <div className="text-3xl font-bold" style={{ color: c.valueColor, fontFamily: "var(--font-display)" }}>
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-[#202321]">{label}</div>
      <div className="mt-0.5 text-xs text-[#687967]">{sub}</div>
    </div>
  );
}
