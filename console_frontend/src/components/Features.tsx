import { Card } from "@/components/ui/card"
import {
  Grid3x3,
  Users,
  CheckCircle2,
  Zap,
  Globe,
  BarChart3,
} from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const Features = () => {
  const features: Feature[] = [
    {
      icon: <Grid3x3 className="w-6 h-6" />,
      title: "Grid-Based Tasks",
      description:
        "Organize mapping work into manageable grid tiles. Coordinate contributors with precision and track progress in real-time.",
      color: "bg-primary/10 border-primary/20",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Data Validation",
      description:
        "Ensure hyper-local GIS data quality through structured validation workflows. Maintain accuracy standards across all contributions.",
      color: "bg-accent/10 border-accent/20",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Coordination",
      description:
        "Manage distributed cartography teams seamlessly. Assign tasks, track contributions, and celebrate community impact together.",
      color: "bg-primary/10 border-primary/20",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Coverage",
      description:
        "Map areas one grid at a time. Support distributed teams across time zones and regions with asynchronous collaboration.",
      color: "bg-secondary/10 border-secondary/20",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Onboarding",
      description:
        "New contributors get started in minutes. Intuitive interface and clear workflows reduce training time and boost participation.",
      color: "bg-primary/10 border-primary/20",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Impact Analytics",
      description:
        "Track contributions and visualize community impact. Motivate teams with transparent progress metrics and achievement badges.",
      color: "bg-accent/10 border-accent/20",
    },
  ]

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Powerful Features for Teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to coordinate distributed cartography teams and build hyper-accurate maps together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 border-2 ${feature.color} hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Features
