import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const industryData = [
  { industry: "Manufacturing", implementations: 456000, jobsReplaced: 1234000, growth: 52 },
  { industry: "Retail", implementations: 342000, jobsReplaced: 876000, growth: 67 },
  { industry: "Healthcare", implementations: 289000, jobsReplaced: 234000, growth: 43 },
  { industry: "Finance", implementations: 267000, jobsReplaced: 456000, growth: 71 },
  { industry: "Food Service", implementations: 198000, jobsReplaced: 567000, growth: 89 },
  { industry: "Transportation", implementations: 187000, jobsReplaced: 789000, growth: 45 },
  { industry: "Customer Service", implementations: 156000, jobsReplaced: 1098000, growth: 94 },
  { industry: "Logistics", implementations: 134000, jobsReplaced: 345000, growth: 38 },
];

export function IndustryAnalysis() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>AI Implementation by Industry</CardTitle>
        <CardDescription>
          Global analysis of AI adoption across major industries (2020-2025)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={industryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="industry" angle={-45} textAnchor="end" height={100} />
            <YAxis yAxisId="left" />
            <Tooltip />
            <Legend />
            <Bar dataKey="implementations" fill="#3b82f6" name="AI Implementations" yAxisId="left" />
            <Bar dataKey="jobsReplaced" fill="#ef4444" name="Jobs Replaced" yAxisId="left" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
