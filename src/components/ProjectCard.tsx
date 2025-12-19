import { logEvent } from "@/lib/firebase";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-secondary/30 transition-all hover:bg-card hover:shadow-xl hover:-translate-y-1 duration-300 h-full">
      {project.imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={`${project.title} illustration`} 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-xl tracking-tight text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          {project.status && (
             <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                project.status === 'live' ? 'bg-green-500/10 text-green-600 dark:text-green-400 animate-pulse' :
                project.status === 'wip' ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' :
                'bg-gray-500/10 text-gray-600 dark:text-gray-400'
             }`}>
               {project.status}
             </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-3 mt-auto px-6 pb-6">
        <Button asChild size="sm" className="w-full gap-2 transition-transform group-hover:translate-y-[-2px]">
          <a 
            href={project.websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => logEvent('select_content', { content_type: 'project_link', item_id: project.id, item_name: project.title, link_type: 'website' })}
          >
            <ExternalLink className="w-4 h-4" />
            Visit Site
          </a>
        </Button>
        
        {project.githubUrl && (
          <Button asChild variant="outline" size="icon" className="shrink-0 transition-transform group-hover:translate-y-[-2px]">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="View on GitHub"
              onClick={() => logEvent('select_content', { content_type: 'project_link', item_id: project.id, item_name: project.title, link_type: 'github' })}
            >
              <Github className="w-4 h-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
