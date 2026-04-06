import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Lightbulb, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

interface Opportunity {
  id: string;
  title: string;
  description: string;
  market: string;
  potentialValue: string;
  difficulty: "Low" | "Medium" | "High";
  timeline: string;
  existingSolution?: string;
  countries: string[];
  status: "Emerging" | "Growing" | "Mature";
}

const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "AI-Powered Restaurant Automation",
    description: "Automated kitchen systems and robotic servers for quick-service restaurants. China has deployed 45K+ robots in food service.",
    market: "Food Service",
    potentialValue: "$67B",
    difficulty: "Medium",
    timeline: "12-18 months",
    existingSolution: "China: Haidilao Hot Pot robots, Japan: Pepper robot servers",
    countries: ["China", "Japan", "South Korea"],
    status: "Growing",
  },
  {
    id: "2",
    title: "Healthcare Diagnostic AI",
    description: "Deep learning systems for medical imaging and diagnosis. Gap in rural healthcare access in developing markets.",
    market: "Healthcare",
    potentialValue: "$124B",
    difficulty: "High",
    timeline: "24-36 months",
    existingSolution: "USA: PathAI, UK: Babylon Health",
    countries: ["United States", "United Kingdom", "Singapore"],
    status: "Mature",
  },
  {
    id: "3",
    title: "Warehouse Automation Systems",
    description: "ML-driven inventory management and robotic picking systems. High demand in e-commerce sector.",
    market: "Logistics",
    potentialValue: "$89B",
    difficulty: "Medium",
    timeline: "8-12 months",
    existingSolution: "USA: Amazon Robotics, Germany: KION Group",
    countries: ["United States", "Germany", "Netherlands"],
    status: "Growing",
  },
  {
    id: "4",
    title: "AI Customer Service Platforms",
    description: "Neural network-based chatbots and voice assistants. Over 1M jobs replaced in customer service globally.",
    market: "Customer Service",
    potentialValue: "$45B",
    difficulty: "Low",
    timeline: "6-9 months",
    existingSolution: "Global: ChatGPT, China: Xiaoi Robot",
    countries: ["China", "United States", "India"],
    status: "Mature",
  },
  {
    id: "5",
    title: "Predictive Maintenance for Manufacturing",
    description: "IoT + AI systems to predict equipment failures before they occur. Significant cost savings potential.",
    market: "Manufacturing",
    potentialValue: "$156B",
    difficulty: "High",
    timeline: "18-24 months",
    existingSolution: "Germany: Siemens MindSphere, USA: GE Predix",
    countries: ["Germany", "United States", "Japan"],
    status: "Growing",
  },
  {
    id: "6",
    title: "Agricultural AI Optimization",
    description: "Machine learning for crop yield prediction, automated irrigation, and pest detection. Emerging market need.",
    market: "Agriculture",
    potentialValue: "$34B",
    difficulty: "Medium",
    timeline: "12-18 months",
    existingSolution: "Israel: Taranis, India: CropIn",
    countries: ["Israel", "India", "Brazil"],
    status: "Emerging",
  },
];

function getDifficultyColor(difficulty: string): "default" | "secondary" | "destructive" {
  if (difficulty === "Low") return "default";
  if (difficulty === "Medium") return "secondary";
  return "destructive";
}

function getStatusIcon(status: string) {
  if (status === "Emerging") return <AlertCircle className="h-4 w-4" />;
  if (status === "Growing") return <TrendingUp className="h-4 w-4" />;
  return <CheckCircle className="h-4 w-4" />;
}

function getStatusColor(status: string): "default" | "secondary" | "outline" {
  if (status === "Emerging") return "outline";
  if (status === "Growing") return "secondary";
  return "default";
}

export function MarketOpportunities() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          Market Opportunities & Business Gaps
        </CardTitle>
        <CardDescription>
          Identified business opportunities based on global AI implementation patterns and unmet needs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="border rounded-lg p-4 hover:bg-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{opportunity.title}</h4>
                    <Badge variant={getStatusColor(opportunity.status)} className="flex items-center gap-1">
                      {getStatusIcon(opportunity.status)}
                      {opportunity.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {opportunity.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground">Market</p>
                  <p className="text-sm font-medium">{opportunity.market}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Potential Value</p>
                  <p className="text-sm font-medium text-green-600">{opportunity.potentialValue}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Implementation</p>
                  <Badge variant={getDifficultyColor(opportunity.difficulty)}>
                    {opportunity.difficulty}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Timeline</p>
                  <p className="text-sm font-medium">{opportunity.timeline}</p>
                </div>
              </div>

              {opportunity.existingSolution && (
                <div className="mb-3">
                  <p className="text-xs text-muted-foreground mb-1">Existing Solutions</p>
                  <p className="text-sm">{opportunity.existingSolution}</p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {opportunity.countries.map((country) => (
                    <Badge key={country} variant="outline" className="text-xs">
                      {country}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  Analyze Opportunity
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
