import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 bg-input-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring min-h-[120px] ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
