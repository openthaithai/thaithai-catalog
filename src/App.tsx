import { Header } from "@/components/Header"
import { ProjectCard } from "@/components/ProjectCard"
import { projects } from "@/data/projects"

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/10 selection:text-primary">
      <Header />
      
      <main className="container mx-auto px-4 md:px-6 pt-12 md:pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-[980px] text-center mb-16 space-y-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] animate-in fade-in slide-in-from-bottom-3 duration-700 ease-out">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              OPENdata for THAIS.
            </span>
          </h1>
          <p className="max-w-[750px] mx-auto text-lg text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out delay-150">
            Unlocking the value of Thai public data. Explore a curated collection of open-source projects, visualizations, and tools that make information accessible, transparent, and useful for everyone.
          </p>
        </section>

        {/* Catalog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out delay-300">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        {/* Empty State / Footer Call to Action */}
        <section className="mt-24 text-center border-t py-5">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} ThaiThai Catalog. All rights reserved.
            </p>
        </section>
      </main>
    </div>
  )
}

export default App
