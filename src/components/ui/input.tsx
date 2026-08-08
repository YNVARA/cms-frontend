import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftElement?: ReactNode;
    rightElement?: ReactNode;
    error?: boolean;
}

export function Input({
    className,
    leftElement,
    rightElement,
    error = false,
    ...props
}: InputProps) {
    return (
        <div className="relative w-full">
            {leftElement && (
                <div
                    className="
                        pointer-events-none
                        absolute left-4 top-1/2
                        -translate-y-1/2
                        text-slate-400
                        dark:text-slate-500
                    "
                >
                    {leftElement}
                </div>
            )}

            <input
                className={cn(
                    `
                        h-12 w-full rounded-sm
                        border
                        bg-white
                        px-4
                        text-sm
                        text-slate-900
                        outline-none
                        transition-colors

                        placeholder:text-slate-400

                        focus:border-slate-400
                        focus:ring-1
                        focus:ring-slate-200

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                        disabled:bg-slate-50

                        dark:bg-slate-900
                        dark:text-slate-100
                        dark:placeholder:text-slate-500

                        dark:focus:border-slate-600
                        dark:focus:ring-slate-800

                        dark:disabled:bg-slate-950
                    `,
                    leftElement && 'pl-11',
                    rightElement && 'pr-11',

                    error
                        ? `
                            border-red-500
                            focus:border-red-500
                            focus:ring-red-100

                            dark:border-red-500
                            dark:focus:border-red-500
                            dark:focus:ring-red-950
                        `
                        : `
                            border-slate-200
                            dark:border-slate-800
                        `,

                    className,
                )}
                {...props}
            />

            {rightElement && (
                <div
                    className="
                        absolute right-4 top-1/2
                        -translate-y-1/2
                        text-slate-400
                        dark:text-slate-500
                    "
                >
                    {rightElement}
                </div>
            )}
        </div>
    );
}
