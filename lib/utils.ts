import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate a tracking number in the format XXXX-XXXX
export function generateTrackingNumber(): string {
  const firstPart = Math.floor(1000 + Math.random() * 9000);
  const secondPart = Math.floor(1000 + Math.random() * 9000);
  return `${firstPart}-${secondPart}`;
}

// Get color for status badge
export function getStatusColor(status: string): string {
  switch (status) {
    case "Visa Application Received":
      return "blue";
    case "Visa Is Being Processed":
      return "yellow";
    case "Visa Document Validated":
      return "orange";
    case "Visa Almost Ready":
      return "purple";
    case "Visa Ready":
      return "green";
    default:
      return "gray";
  }
}

// Format date for display
export function formatDate(date: Date | string): string {
  if (!date) return "";
  try {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
}
