import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
    return (
        <textarea
            className={cn(
                `
                    min-h-32 w-full
                    resize-y
                    rounded-sm
                    border border-slate-200
                    bg-white
                    px-4 py-3
                    text-sm
                    text-slate-900
                    outline-none

                    placeholder:text-slate-400

                    focus:border-slate-400
                    focus:ring-1
                    focus:ring-slate-200

                    dark:border-slate-800
                    dark:bg-slate-900
                    dark:text-slate-100
                    dark:placeholder:text-slate-500

                    dark:focus:border-slate-600
                    dark:focus:ring-slate-800
                `,
                className,
            )}
            {...props}
        />
    );
}
