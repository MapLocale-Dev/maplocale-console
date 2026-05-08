import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { MapPinIcon } from "lucide-react"
import { FaGithub, FaGoogle } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"

const providers = [
  {
    name: "Google",
    icon: FaGoogle,
    className: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    className: "bg-slate-950 text-white border border-slate-900 hover:bg-slate-900",
  },
]

const Login = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_28%),linear-gradient(to_bottom_right,rgba(248,250,252,1),rgba(240,253,244,1))] text-foreground pt-16">
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-center">
          <Card className="w-full max-w-xl border-border/60 bg-background/90 p-5 shadow-[0_20px_80px_-35px_rgba(15,23,42,0.35)] sm:p-7">
            <div className="mb-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <MapPinIcon className="h-3.5 w-3.5" />
                MapLocale Console
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Sign in to MapLocale.</h1>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Sign in to access the MapLocale console.
              </p>
            </div>

            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {providers.map((provider) => {
                const Icon = provider.icon
                return (
                  <Button
                    key={provider.name}
                    variant="outline"
                    size="lg"
                    className={`h-12 w-full justify-start gap-3 rounded-xl px-4 text-sm font-medium shadow-none ${provider.className}`}
                  >
                    <Icon className="h-5 w-5" />
                    {provider.name}
                  </Button>
                )
              })}
            </div>

            <div className="my-6 flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">or use email</span>
              <Separator className="flex-1" />
            </div>

            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="identifier">Username or email</Label>
                <Input id="identifier" type="text" placeholder="name@organization.org" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-between gap-3 text-sm">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="size-4 rounded border-border text-primary focus:ring-primary" />
                  Remember me
                </label>
                <a href="#" className="font-medium text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <Button size="lg" className="h-12 rounded-xl">
                Sign in
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                New here?{' '}
                <Link to="/signup" className="font-medium text-primary hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default Login
