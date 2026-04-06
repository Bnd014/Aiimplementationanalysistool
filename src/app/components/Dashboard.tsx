import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, TrendingDown, Activity, Globe } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

function MetricCard({ title, value, change, icon }: MetricCardProps) {
  const isPositive = change >= 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-green-500" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500" />
          )}
          <span className={isPositive ? "text-green-500" : "text-red-500"}>
            {isPositive ? "+" : ""}{change}%
          </span>
          <span>from last year</span>
        </p>
      </CardContent>
    </Card>
  );
}

export function Dashboard() {
  const metrics = [
    {
      title: "Global AI Implementations",
      value: "2.4M",
      change: 45.2,
      icon: <Globe className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Industries Impacted",
      value: "187",
      change: 12.5,
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Job Displacement Rate",
      value: "8.3%",
      change: 3.2,
      icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Market Value (Trillion)",
      value: "$4.2T",
      change: 67.8,
      icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
