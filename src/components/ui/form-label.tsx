import type { LabelHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}

export function FormLabel({ className, required = false, children, ...props }: FormLabelProps) {
    return (
        <label
            className={cn(
                'text-sm font-medium',
                'text-slate-600 dark:text-slate-300',
                'disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        >
            {children}

            {required && (
                <span className="ml-1 text-red-500" aria-hidden="true">
                    *
                </span>
            )}
        </label>
    );
}
