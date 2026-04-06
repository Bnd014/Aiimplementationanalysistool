import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const trendData = [
  { year: "2020", machineLearning: 145, neuralNetworks: 89, deepLearning: 67, robotics: 234 },
  { year: "2021", machineLearning: 198, neuralNetworks: 134, deepLearning: 98, robotics: 312 },
  { year: "2022", machineLearning: 267, neuralNetworks: 189, deepLearning: 145, robotics: 423 },
  { year: "2023", machineLearning: 356, neuralNetworks: 267, deepLearning: 214, robotics: 567 },
  { year: "2024", machineLearning: 489, neuralNetworks: 378, deepLearning: 312, robotics: 743 },
  { year: "2025", machineLearning: 678, neuralNetworks: 523, deepLearning: 456, robotics: 987 },
  { year: "2026 (Proj)", machineLearning: 923, neuralNetworks: 734, deepLearning: 645, robotics: 1298 },
  { year: "2027 (Proj)", machineLearning: 1234, neuralNetworks: 1012, deepLearning: 892, robotics: 1687 },
];

export function TrendAnalysis() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>AI Technology Trends & Predictions</CardTitle>
        <CardDescription>
          Historical data and predictive analytics for AI technologies (thousands of implementations)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <Tooltip />
            <Legend />
            <Line key="ml-line" type="monotone" dataKey="machineLearning" stroke="#3b82f6" name="Machine Learning" strokeWidth={2} yAxisId="left" />
            <Line key="nn-line" type="monotone" dataKey="neuralNetworks" stroke="#8b5cf6" name="Neural Networks" strokeWidth={2} yAxisId="left" />
            <Line key="dl-line" type="monotone" dataKey="deepLearning" stroke="#10b981" name="Deep Learning" strokeWidth={2} yAxisId="left" />
            <Line key="robotics-line" type="monotone" dataKey="robotics" stroke="#f59e0b" name="Robotics" strokeWidth={2} yAxisId="left" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
