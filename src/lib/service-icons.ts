import {
  House,
  Sun,
  Building,
  Layers,
  Fence,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "./data/services";

export const serviceIconMap: Record<ServiceIcon, LucideIcon> = {
  shed: House,
  summerhouse: Sun,
  "garden-room": Building,
  decking: Layers,
  fencing: Fence,
  transformation: Sparkles,
};
