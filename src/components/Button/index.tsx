import { ButtonProps } from "./types";

export function Button({ children, type, href }: ButtonProps) {
  return (
    <a
      href={href}
      className={`p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center ${
        type === "primary"
          ? "bg-green-500 hover:bg-green-700"
          : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900"
      } transition-colors`}
    >
      {children}
    </a>
  );
}
