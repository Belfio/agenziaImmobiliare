"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SearchCombo<
  T extends { value: string; label: string }
>({
  list,
  placeholder,
  search,
  setSearch,
  className,
  width = "w-[300px]",
}: {
  list: T[];
  placeholder?: string;
  search: string;
  setSearch: (search: string) => void;
  className?: string;
  width?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", className, width)}
        >
          {search
            ? list.find((element) => element.value === search)?.value
            : placeholder || "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0", width)}>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>Not found</CommandEmpty>
            <CommandGroup>
              {list.map((element) => (
                <CommandItem
                  key={element.value}
                  value={element.label}
                  onSelect={(currentValue) => {
                    setSearch(
                      currentValue === search
                        ? ""
                        : list.find((element) => element.label === currentValue)
                            ?.value || ""
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      search === element.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {element.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
