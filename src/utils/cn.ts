import clsx, { type ClassValue } from "clsx"; // Can be replaced with classnames
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}
