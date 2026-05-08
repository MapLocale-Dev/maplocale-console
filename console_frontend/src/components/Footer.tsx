import { Button } from "@/components/ui/button"
import { MapPinIcon } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, label: "GitHub", href: "#" },
    { icon: FaTwitter, label: "X", href: "#" },
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
    { icon: FaEnvelope, label: "Email", href: "#" },
  ]

  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Documentation", "Pricing", "Status"],
    },
    {
      title: "Community",
      links: ["GitHub", "Discord", "Forum", "Events"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "License", "Security"],
    },
  ]

  return (
    <footer className="relative w-full bg-card border-t border-border/40">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary rounded-lg p-2">
                  <MapPinIcon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">MapLocale</span>
              </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Coordinate cartography at scale.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary"
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-border/40 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} MapLocale Console. All rights reserved.
            </div>
              <div className="text-sm text-muted-foreground">MapLocale Console</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
