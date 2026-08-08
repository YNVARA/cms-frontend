import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ className, type, ...props }: CheckboxProps) {
    return (
        <input
            type="checkbox"
            className={cn(
                `
                    h-4 w-4
                    rounded
                    border border-slate-300
                    bg-white

                    accent-slate-900

                    focus:ring-2
                    focus:ring-slate-200

                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:accent-slate-100
                    dark:focus:ring-slate-800
                `,
                className,
            )}
            {...props}
        />
    );
}
