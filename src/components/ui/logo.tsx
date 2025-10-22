import { cn } from "@/lib/utils";
import Image from "next/image";

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
      <Image 
        src="/logo.png" 
        alt="Lish AI Labs" 
        width={32} 
        height={32} 
        className={cn("rounded-lg object-contain", className)}
      />
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
      <Image 
        src="/logo.png" 
        alt="Lish AI Labs" 
        width={32} 
        height={32} 
        className={cn("rounded-lg object-contain", sizeClasses[size])}
      />
      <div className="flex flex-col">
        <span className={cn("font-display font-bold text-gradient-primary", textSizeClasses[size])}>
          Lish AI Labs
        </span>
        <span className="text-xs text-muted-foreground">Training Platform</span>
      </div>
    </div>
  );
}
