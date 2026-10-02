import { impactMetrics } from "@/content/resume";

export function MetricStrip() {
  return (
    <div className="grid grid-cols-2 border-y border-white/[.1] md:grid-cols-6">
      {impactMetrics.map((metric, index) => (
        <div
          key={metric.label}
          className={`px-4 py-6 ${index < impactMetrics.length - 1 ? "border-r border-white/[.1]" : ""}`}
        >
          <p className="display text-3xl font-semibold text-white">
            {metric.value}
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
