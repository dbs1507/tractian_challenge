import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-lg px-6 py-3 font-medium transition-colors",
        variant === "primary" && "bg-white text-zinc-900 hover:bg-zinc-100",
        variant === "secondary" && "border border-white hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
