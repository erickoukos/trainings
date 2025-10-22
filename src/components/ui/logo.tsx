import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon" | "text";
}

export function Logo({ className, size = "md", variant = "full" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  if (variant === "icon") {
    return (
      <div className={cn("flex items-center justify-center rounded-lg bg-gradient-primary", sizeClasses[size], className)}>
        <svg
          className="h-1/2 w-1/2 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <span className={cn("font-display font-bold text-gradient-primary", textSizeClasses[size])}>
          Lish AI Labs
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className={cn("flex items-center justify-center rounded-lg bg-gradient-primary", sizeClasses[size])}>
        <svg
          className="h-1/2 w-1/2 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={cn("font-display font-bold text-gradient-primary", textSizeClasses[size])}>
          Lish AI Labs
        </span>
        <span className="text-xs text-muted-foreground">Training Platform</span>
      </div>
    </div>
  );
}
