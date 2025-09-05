const score = alert.cve.metrics?.cvssMetricV2?.[0]?.baseScore || 0;
const { level, color } = getSeverity(score);

<h2 className={`font-semibold text-lg ${color}`}>
  {alert.cve.id} — {level}
</h2>;
