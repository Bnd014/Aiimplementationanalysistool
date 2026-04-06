import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Dashboard } from "./components/Dashboard";
import { IndustryAnalysis } from "./components/IndustryAnalysis";
import { GeographicAnalysis } from "./components/GeographicAnalysis";
import { TrendAnalysis } from "./components/TrendAnalysis";
import { MarketOpportunities } from "./components/MarketOpportunities";
import { ComparativeAnalysis } from "./components/ComparativeAnalysis";
import { CaseStudyDetail } from "./components/CaseStudyDetail";
import { Brain, TrendingUp, Globe, Lightbulb, GitCompare, FileText } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">AI Implementation Intelligence Platform</h1>
          </div>
          <p className="text-muted-foreground">
            Global analysis of AI adoption, market trends, and business opportunities across industries
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="industry" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">Industry</span>
            </TabsTrigger>
            <TabsTrigger value="geographic" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Geographic</span>
            </TabsTrigger>
            <TabsTrigger value="trends" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Trends</span>
            </TabsTrigger>
            <TabsTrigger value="opportunities" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              <span className="hidden sm:inline">Opportunities</span>
            </TabsTrigger>
            <TabsTrigger value="comparison" className="flex items-center gap-2">
              <GitCompare className="h-4 w-4" />
              <span className="hidden sm:inline">Compare</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Dashboard />
            <div className="grid gap-6 md:grid-cols-2">
              <IndustryAnalysis />
              <TrendAnalysis />
            </div>
            <CaseStudyDetail />
          </TabsContent>

          <TabsContent value="industry" className="space-y-6">
            <IndustryAnalysis />
            <div className="grid gap-6 md:grid-cols-2">
              <Dashboard />
            </div>
          </TabsContent>

          <TabsContent value="geographic" className="space-y-6">
            <GeographicAnalysis />
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <TrendAnalysis />
            <CaseStudyDetail />
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <MarketOpportunities />
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <ComparativeAnalysis />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-2">Data Sources</h3>
              <p className="text-sm text-muted-foreground">
                Industry reports, government statistics, market research, and real-time implementation tracking across 180+ countries.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Update Frequency</h3>
              <p className="text-sm text-muted-foreground">
                Data refreshed quarterly. Last update: April 2026. Predictive models use machine learning on 6 years of historical data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Analysis Coverage</h3>
              <p className="text-sm text-muted-foreground">
                187 industries • 180+ countries • 2.4M+ AI implementations • $4.2T market analysis
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}