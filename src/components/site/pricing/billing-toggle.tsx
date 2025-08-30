"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

interface BillingToggleProps {
  isYearly: boolean;
  onChange: (isYearly: boolean) => void;
}

export function BillingToggle({ isYearly, onChange }: BillingToggleProps) {
  return (
    <div className="mb-4 mt-10 flex items-center gap-5 ">
      <ToggleGroup
        type="single"
        size="sm"
        value={isYearly ? "yearly" : "monthly"}
        onValueChange={(val) => {
          if (!val) return; // ignore clearing
          onChange(val === "yearly");
        }}
        aria-label="toggle-year"
        className="relative grid h-9 grid-cols-2 overflow-hidden rounded-md border bg-muted p-0"
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 w-1/2 rounded-md bg-muted shadow-sm transition-transform duration-200 ease-out",
            isYearly ? "translate-x-full" : "translate-x-0",
          )}
        />
        <ToggleGroupItem
          value="monthly"
          className={cn(
            "z-10 h-9 w-full min-w-[148px] justify-center rounded-md px-6 transition-colors",
            isYearly ? "text-muted-foreground" : "text-foreground"
          )}
          aria-label="Toggle monthly billing"
        >
          MONTHLY
        </ToggleGroupItem>
        <ToggleGroupItem
          value="yearly"
          className={cn(
            "z-10 h-9 w-full min-w-[148px] justify-center rounded-md px-6 transition-colors",
            isYearly ? "text-foreground" : "text-muted-foreground"
          )}
          aria-label="Toggle yearly billing"
        >
          YEARLY (SAVE 20%)
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}


