import type { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className, children, ...props }: SelectProps) {
    return (
        <select
            className={cn(
                `
                    h-12 w-full rounded-sm
                    border border-slate-200
                    bg-white px-4
                    text-sm text-slate-900
                    outline-none
                    transition-colors

                    focus:border-slate-400
                    focus:ring-1
                    focus:ring-slate-200

                    dark:border-slate-800
                    dark:bg-slate-900
                    dark:text-slate-100

                    dark:focus:border-slate-600
                    dark:focus:ring-slate-800

                    disabled:cursor-not-allowed
                    disabled:opacity-50
                `,
                className,
            )}
            {...props}
        >
            {children}
        </select>
    );
}
