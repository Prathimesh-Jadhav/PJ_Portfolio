import { ExternalLink, Github } from "lucide-react"
import { useNavigate } from "react-router"

// Raw Button component
const Button = ({ children, asChild, className = "", size = "default", variant = "default", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  const sizeClasses = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  }
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (asChild) {
    return <span className={classes}>{children}</span>
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

// Raw Card components
const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-4 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props}>
    {children}
  </p>
)

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const CardFooter = ({ children, className = "", ...props }) => (
  <div className={`flex items-center p-4 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

// Raw Badge component
const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default function ProjectCard({
  id,
  title = "NO title",
  image = "https://unsplash.com/photos/4Zl5QXcEr4M/download?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&w=800&q=60",
  liveUrl = "https://example.com",
  githubUrl = "https://github.com/username/project",
}) {

  const Navigate = useNavigate();
  return (
    <Card className="md:min-w-[280px] max-md:min-w-[250px] max-w-[280px] overflow-hidden group hover:shadow-lg transition-shadow duration-300 border-gray-700 text-gray-300">
      <div className="relative overflow-hidden" onClick={()=>{Navigate(`/projects/${id}`)}}>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <CardHeader className="space-y-2"  onClick={()=>{Navigate(`/projects/${id}`)}}>
        <CardTitle className="text-xl font-bold line-clamp-1">{title}</CardTitle>
        {/* <CardDescription className="text-sm text-muted-foreground line-clamp-3">{description}</CardDescription> */}
      </CardHeader>
{/* 
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent> */}

      <CardFooter className="flex justify-between gap-2 pt-2">
        <Button asChild className="flex-1 flex gap-1 border border-gray-700 bg-gray-800" size="sm">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center ">
            <ExternalLink className="w-4 h-4 mr-2" />
             Demo
          </a>
        </Button>
        <Button asChild variant="outline" size="sm" className="flex-1 bg-white text-black hover:bg-gray-100 ">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
