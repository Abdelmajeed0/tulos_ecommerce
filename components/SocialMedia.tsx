import { Facebook, Github, Linkedin } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Github",
    href: "https://github.com/Abdelmajeed0",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://linkedin.com/in/mohamed-abdelmajeed-589248325",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://facebook.com/mohamed.abdelmajeed.587235",
    icon: <Facebook className="w-5 h-5" />,
  },
];

function SocialMedia({ className, iconClassName, tooltipClassName }: Props) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <a
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-white hovereffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia;
