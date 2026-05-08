import { Button } from "@/components/ui/button"
import { Compass, Users, CheckCircle2, ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 -ml-48 -mb-48"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Compass className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">MapLocale Console</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-linear-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Coordinate
            </span>
            <br />
            <span className="text-foreground">Cartography at Scale</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            The central operations hub for MapLocale. Coordinate distributed cartography teams, manage grid-based mapping tasks, and validate hyper-local GIS data. Transform collaboration into impact.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Compass className="w-5 h-5 text-primary" />
              <span className="text-foreground">Grid-Based Mapping</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-foreground">Validation & QA</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-foreground">Team Management</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2 group">
              <Compass className="w-5 h-5" />
              Start Mapping
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 group"
            >
              <Users className="w-5 h-5" />
              Join the Community
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
