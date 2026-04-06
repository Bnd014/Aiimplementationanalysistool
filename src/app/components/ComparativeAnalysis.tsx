import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { ArrowRight, Check, X } from "lucide-react";

interface Solution {
  country: string;
  industry: string;
  technology: string;
  implementation: string;
  cost: string;
  effectiveness: number;
  adoptionRate: number;
  keyFeatures: string[];
  challenges: string[];
  applicability: string[];
}

const solutions: Solution[] = [
  {
    country: "China",
    industry: "Food Service",
    technology: "Robotic Servers & Automated Kitchens",
    implementation: "Haidilao Hot Pot Restaurants",
    cost: "$45K-$120K per unit",
    effectiveness: 92,
    adoptionRate: 78,
    keyFeatures: [
      "Automated food delivery to tables",
      "Voice recognition for orders",
      "Integration with kitchen management",
      "Reduced labor costs by 60%",
    ],
    challenges: [
      "High initial investment",
      "Maintenance requirements",
      "Customer adaptation period",
    ],
    applicability: ["United States", "Europe", "Southeast Asia"],
  },
  {
    country: "United States",
    industry: "Healthcare",
    technology: "AI Diagnostic Systems",
    implementation: "PathAI Medical Imaging",
    cost: "$200K-$500K implementation",
    effectiveness: 95,
    adoptionRate: 67,
    keyFeatures: [
      "99.5% accuracy in cancer detection",
      "Reduces diagnosis time by 70%",
      "Integration with existing hospital systems",
      "Continuous learning from new cases",
    ],
    challenges: [
      "Regulatory approval complexity",
      "Data privacy concerns",
      "Training requirements for staff",
    ],
    applicability: ["Europe", "Canada", "Australia", "Japan"],
  },
  {
    country: "Germany",
    industry: "Manufacturing",
    technology: "Predictive Maintenance AI",
    implementation: "Siemens MindSphere Platform",
    cost: "$50K-$300K + subscription",
    effectiveness: 88,
    adoptionRate: 73,
    keyFeatures: [
      "Predicts equipment failures 7-14 days ahead",
      "Reduces downtime by 45%",
      "IoT sensor integration",
      "Real-time monitoring dashboards",
    ],
    challenges: [
      "Requires extensive sensor infrastructure",
      "Complex data integration",
      "Skills gap for maintenance teams",
    ],
    applicability: ["United States", "Japan", "South Korea", "India"],
  },
  {
    country: "Japan",
    industry: "Retail",
    technology: "Automated Checkout Systems",
    implementation: "Family Mart Smart Stores",
    cost: "$80K-$200K per store",
    effectiveness: 85,
    adoptionRate: 81,
    keyFeatures: [
      "Computer vision product recognition",
      "No checkout lines required",
      "Theft prevention AI",
      "Inventory tracking in real-time",
    ],
    challenges: [
      "System reliability concerns",
      "Edge cases in product recognition",
      "Infrastructure upgrades needed",
    ],
    applicability: ["China", "United States", "Singapore", "UAE"],
  },
  {
    country: "Israel",
    industry: "Agriculture",
    technology: "Precision Farming AI",
    implementation: "Taranis Crop Intelligence",
    cost: "$15-$30 per acre/year",
    effectiveness: 90,
    adoptionRate: 45,
    keyFeatures: [
      "Drone-based crop monitoring",
      "Disease detection at early stages",
      "Yield prediction accuracy 93%",
      "Optimized pesticide application",
    ],
    challenges: [
      "Weather-dependent data collection",
      "Farmer training requirements",
      "Internet connectivity in rural areas",
    ],
    applicability: ["United States", "India", "Brazil", "Australia"],
  },
];

export function ComparativeAnalysis() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  const industries = ["all", ...Array.from(new Set(solutions.map(s => s.industry)))];

  const filteredSolutions = selectedIndustry === "all"
    ? solutions
    : solutions.filter(s => s.industry === selectedIndustry);

  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Cross-Country Solution Comparison</CardTitle>
            <CardDescription>
              Compare successful AI implementations across countries for similar business problems
            </CardDescription>
          </div>
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry === "all" ? "All Industries" : industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {filteredSolutions.map((solution, index) => (
            <div
              key={index}
              className="border rounded-lg p-5 bg-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="font-semibold">
                      {solution.country}
                    </Badge>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{solution.industry}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{solution.technology}</h4>
                  <p className="text-sm text-muted-foreground">{solution.implementation}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Implementation Cost</p>
                  <p className="font-semibold">{solution.cost}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-accent/50 rounded-md p-3">
                  <p className="text-xs text-muted-foreground mb-1">Effectiveness Score</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-background rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${solution.effectiveness}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold">{solution.effectiveness}%</span>
                  </div>
                </div>
                <div className="bg-accent/50 rounded-md p-3">
                  <p className="text-xs text-muted-foreground mb-1">Market Adoption Rate</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-background rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${solution.adoptionRate}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold">{solution.adoptionRate}%</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold mb-2 flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-500" />
                    Key Features
                  </p>
                  <ul className="space-y-1">
                    {solution.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2 flex items-center gap-1">
                    <X className="h-4 w-4 text-red-500" />
                    Challenges
                  </p>
                  <ul className="space-y-1">
                    {solution.challenges.map((challenge, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="text-xs text-muted-foreground mb-2">
                  Applicable to similar problems in:
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {solution.applicability.map((country) => (
                    <Badge key={country} variant="secondary" className="flex items-center gap-1">
                      <ArrowRight className="h-3 w-3" />
                      {country}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
