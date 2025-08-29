import * as React from "react";
import { LucideIcon, icons } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: keyof typeof icons;
  size?: number;
  color?: string;
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ name, size = 24, color, className, ...props }, ref) => {
    const IconComponent = icons[name] as LucideIcon;
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found`);
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center", className)}
        {...props}
      >
        <IconComponent size={size} color={color} />
      </div>
    );
  }
);

Icon.displayName = "Icon";

export { Icon };
