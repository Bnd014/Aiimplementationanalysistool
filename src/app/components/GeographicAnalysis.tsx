import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";

const countryData = [
  {
    country: "China",
    implementations: 687000,
    topIndustry: "Manufacturing",
    growth: 78,
    aiInvestment: "$124B",
    robotsDeployed: 234500,
  },
  {
    country: "United States",
    implementations: 543000,
    topIndustry: "Technology",
    growth: 65,
    aiInvestment: "$156B",
    robotsDeployed: 189000,
  },
  {
    country: "Japan",
    implementations: 298000,
    topIndustry: "Robotics",
    growth: 54,
    aiInvestment: "$67B",
    robotsDeployed: 145000,
  },
  {
    country: "Germany",
    implementations: 234000,
    topIndustry: "Automotive",
    growth: 48,
    aiInvestment: "$45B",
    robotsDeployed: 98000,
  },
  {
    country: "South Korea",
    implementations: 198000,
    topIndustry: "Electronics",
    growth: 72,
    aiInvestment: "$38B",
    robotsDeployed: 87000,
  },
  {
    country: "United Kingdom",
    implementations: 167000,
    topIndustry: "Finance",
    growth: 56,
    aiInvestment: "$32B",
    robotsDeployed: 56000,
  },
  {
    country: "India",
    implementations: 145000,
    topIndustry: "IT Services",
    growth: 92,
    aiInvestment: "$28B",
    robotsDeployed: 43000,
  },
  {
    country: "Canada",
    implementations: 89000,
    topIndustry: "Healthcare",
    growth: 47,
    aiInvestment: "$18B",
    robotsDeployed: 34000,
  },
];

function getGrowthBadgeColor(growth: number): "default" | "secondary" | "destructive" | "outline" {
  if (growth >= 70) return "default";
  if (growth >= 50) return "secondary";
  return "outline";
}

export function GeographicAnalysis() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Global AI Implementation by Country</CardTitle>
        <CardDescription>
          Regional analysis of AI adoption, investment, and automation (2020-2025)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Country</TableHead>
              <TableHead className="text-right">Implementations</TableHead>
              <TableHead>Top Industry</TableHead>
              <TableHead className="text-right">Robots Deployed</TableHead>
              <TableHead className="text-right">AI Investment</TableHead>
              <TableHead className="text-right">Growth %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {countryData.map((country) => (
              <TableRow key={country.country}>
                <TableCell className="font-medium">{country.country}</TableCell>
                <TableCell className="text-right">{country.implementations.toLocaleString()}</TableCell>
                <TableCell>{country.topIndustry}</TableCell>
                <TableCell className="text-right">{country.robotsDeployed.toLocaleString()}</TableCell>
                <TableCell className="text-right">{country.aiInvestment}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={getGrowthBadgeColor(country.growth)}>
                    +{country.growth}%
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
