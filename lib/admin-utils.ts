export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const projectTypeLabels: Record<string, string> = {
  flooring: "Flooring Installation",
  kitchen: "Kitchen Renovation",
  bathroom: "Bathroom Renovation",
  "whole-home": "Whole Home Renovation",
  commercial: "Commercial Fit-out",
  painting: "Painting",
  other: "Other",
};

export function formatProjectType(type: string): string {
  return projectTypeLabels[type] ?? type;
}

const budgetLabels: Record<string, string> = {
  "under-5k": "Under $5,000",
  "5k-15k": "$5,000 - $15,000",
  "15k-30k": "$15,000 - $30,000",
  "30k-50k": "$30,000 - $50,000",
  "50k-plus": "$50,000+",
};

export function formatBudget(budget?: string | null): string {
  if (!budget) return "—";
  return budgetLabels[budget] ?? budget;
}
