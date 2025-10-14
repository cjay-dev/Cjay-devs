export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🎵 Brand Section - Company identity and tagline */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">CEEJAY TECH</h3>
            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
              Incorporative Music Solutions
              <br />
              {">"} Advanced Audio Technology
              <br />
              {">"} Est. 2024
            </p>
          </div>

          {/* 📊 System Information - Technical status display */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-secondary">SYSTEM INFO</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
              <li>{">"} Version: 1.0.0</li>
              <li>{">"} Status: Online</li>
              <li>{">"} Uptime: 99.9%</li>
              <li>{">"} Mode: Demo</li>
            </ul>
          </div>

          {/* ⚠️ Legal Disclaimer - Important usage information */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-primary">DISCLAIMER</h4>
            <p className="text-xs text-muted-foreground font-mono leading-relaxed">
              This is a demonstration interface. No actual music downloading occurs. For educational and showcase
              purposes only.
            </p>
          </div>
        </div>

        {/* © Copyright Section - Legal protection and branding */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            ©2025 by CEEJAY tech Incorporative
            <br />
            <span className="text-xs text-primary">{">"} Powered by ADVANCED TECH</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
