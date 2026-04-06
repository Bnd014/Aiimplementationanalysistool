import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Badge } from "./ui/badge";

const chinaRestaurantData = [
  { year: "2020", robots: 12500, jobsReplaced: 34000, revenue: 2.1, efficiency: 45 },
  { year: "2021", robots: 23400, jobsReplaced: 67000, revenue: 4.3, efficiency: 58 },
  { year: "2022", robots: 41200, jobsReplaced: 124000, revenue: 7.8, efficiency: 69 },
  { year: "2023", robots: 68900, jobsReplaced: 213000, revenue: 13.2, efficiency: 78 },
  { year: "2024", robots: 102300, jobsReplaced: 342000, revenue: 21.5, efficiency: 85 },
  { year: "2025", robots: 145600, jobsReplaced: 487000, revenue: 32.8, efficiency: 91 },
];

const usHealthcareData = [
  { year: "2020", aiSystems: 3400, diagnosis: 67000, accuracy: 87, costReduction: 12 },
  { year: "2021", aiSystems: 5800, diagnosis: 145000, accuracy: 89, costReduction: 18 },
  { year: "2022", aiSystems: 9200, diagnosis: 289000, accuracy: 92, costReduction: 26 },
  { year: "2023", aiSystems: 14700, diagnosis: 478000, accuracy: 94, costReduction: 35 },
  { year: "2024", aiSystems: 23100, diagnosis: 723000, accuracy: 96, costReduction: 44 },
  { year: "2025", aiSystems: 34500, diagnosis: 1098000, accuracy: 97, costReduction: 52 },
];

export function CaseStudyDetail() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>In-Depth Case Studies</CardTitle>
        <CardDescription>
          Detailed analysis of successful AI implementations with measurable outcomes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="restaurant" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="restaurant">China: Restaurant Automation</TabsTrigger>
            <TabsTrigger value="healthcare">USA: Healthcare Diagnostics</TabsTrigger>
          </TabsList>

          <TabsContent value="restaurant" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Total Robots Deployed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">145,600</p>
                    <p className="text-xs text-muted-foreground">+42% from 2024</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Jobs Replaced</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">487,000</p>
                    <p className="text-xs text-muted-foreground">Service & kitchen staff</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Market Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">$32.8B</p>
                    <p className="text-xs text-muted-foreground">+53% YoY growth</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Operational Efficiency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">91%</p>
                    <p className="text-xs text-muted-foreground">vs 58% in 2021</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Robot Deployment & Job Impact (2020-2025)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={chinaRestaurantData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Area
                        key="restaurant-robots"
                        type="monotone"
                        dataKey="robots"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.6}
                        name="Robots Deployed"
                        yAxisId="left"
                      />
                      <Area
                        key="restaurant-efficiency"
                        type="monotone"
                        dataKey="efficiency"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.6}
                        name="Efficiency %"
                        yAxisId="right"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="border rounded-lg p-4 space-y-3">
                <h4 className="font-semibold">Key Insights</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge>1</Badge>
                    <p className="text-sm">
                      <strong>Rapid Adoption:</strong> China's restaurant robot market grew 1,065% from 2020-2025, driven by labor shortages and COVID-19 pandemic concerns.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge>2</Badge>
                    <p className="text-sm">
                      <strong>Cost Savings:</strong> Average restaurant saved $78K/year in labor costs per robot, with ROI achieved in 18-24 months.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge>3</Badge>
                    <p className="text-sm">
                      <strong>Consumer Acceptance:</strong> 76% of surveyed customers reported positive experiences with robot servers, citing novelty and efficiency.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge>4</Badge>
                    <p className="text-sm">
                      <strong>Applicability:</strong> Similar models being tested in Japan (14K robots), South Korea (8K), and USA pilot programs (2K+).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="healthcare" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">AI Systems Deployed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">34,500</p>
                    <p className="text-xs text-muted-foreground">+49% from 2024</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Diagnoses Assisted</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">1.1M</p>
                    <p className="text-xs text-muted-foreground">Per year in 2025</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Diagnostic Accuracy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">97%</p>
                    <p className="text-xs text-muted-foreground">vs 87% in 2020</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Cost Reduction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">52%</p>
                    <p className="text-xs text-muted-foreground">Diagnostic costs</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">AI Healthcare System Growth & Accuracy (2020-2025)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={usHealthcareData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Area
                        key="healthcare-systems"
                        type="monotone"
                        dataKey="aiSystems"
                        stroke="#8b5cf6"
                        fill="#8b5cf6"
                        fillOpacity={0.6}
                        name="AI Systems"
                        yAxisId="left"
                      />
                      <Area
                        key="healthcare-accuracy"
                        type="monotone"
                        dataKey="accuracy"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.6}
                        name="Accuracy %"
                        yAxisId="right"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="border rounded-lg p-4 space-y-3">
                <h4 className="font-semibold">Key Insights</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge>1</Badge>
                    <p className="text-sm">
                      <strong>Medical Imaging Breakthrough:</strong> Deep learning models now match or exceed radiologist accuracy in detecting cancer, cardiovascular disease, and neurological conditions.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge>2</Badge>
                    <p className="text-sm">
                      <strong>Efficiency Gains:</strong> AI-assisted diagnosis reduces average diagnostic time from 7-10 days to 2-3 days, enabling faster treatment decisions.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge>3</Badge>
                    <p className="text-sm">
                      <strong>Rural Healthcare Access:</strong> Telemedicine + AI diagnostics bringing specialist-level care to underserved areas, treating 340K+ patients annually.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge>4</Badge>
                    <p className="text-sm">
                      <strong>Global Adoption:</strong> Similar systems deployed in UK (18K), Germany (12K), Australia (7K), and Canada (6K) with comparable success rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
