// Status colors aligned to olive/cream/brass/red palette
const contactColors: Record<string, { bg: string; color: string; border: string }> = {
  new:     { bg: "rgba(181,46,50,0.10)",  color: "#8f2125", border: "rgba(181,46,50,0.25)" },
  read:    { bg: "rgba(198,161,91,0.12)", color: "#7a6030", border: "rgba(198,161,91,0.28)" },
  replied: { bg: "rgba(53,72,58,0.12)",   color: "#2a3a2e", border: "rgba(53,72,58,0.25)" },
};

const quoteColors: Record<string, { bg: string; color: string; border: string }> = {
  new:      { bg: "rgba(181,46,50,0.10)",  color: "#8f2125", border: "rgba(181,46,50,0.25)" },
  reviewed: { bg: "rgba(198,161,91,0.12)", color: "#7a6030", border: "rgba(198,161,91,0.28)" },
  quoted:   { bg: "rgba(104,121,103,0.12)",color: "#35483A", border: "rgba(104,121,103,0.25)" },
  accepted: { bg: "rgba(53,72,58,0.12)",   color: "#2a3a2e", border: "rgba(53,72,58,0.25)" },
  declined: { bg: "rgba(32,35,33,0.07)",   color: "#687967", border: "rgba(32,35,33,0.12)" },
};

const fallback = { bg: "rgba(32,35,33,0.07)", color: "#687967", border: "rgba(32,35,33,0.12)" };

export function StatusBadge({ status }: { status: string }) {
  const s = contactColors[status] ?? quoteColors[status] ?? fallback;
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize"
      style={{
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
      }}
    >
      {status}
    </span>
  );
}
