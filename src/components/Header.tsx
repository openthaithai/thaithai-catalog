export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-primary-foreground font-bold text-lg">
            T
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
            THAITH.AI
          </span>
        </div>
        
        <nav className="flex items-center gap-4">
           {/* Add nav items here if needed later */}
           <a 
            href="https://github.com/openthaithai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
           >
             GitHub
           </a>
        </nav>
      </div>
    </header>
  );
}
