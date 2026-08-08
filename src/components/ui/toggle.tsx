'use client';

import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    size?: 'sm' | 'md' | 'lg';
}

export function Toggle({
    checked = false,
    onCheckedChange,
    disabled = false,
    size = 'md',
    className,
    ...props
}: ToggleProps) {
    const sizes = {
        sm: {
            wrapper: 'h-5 w-9',
            thumb: 'h-4 w-4',
            translate: 'translate-x-4',
        },
        md: {
            wrapper: 'h-6 w-11',
            thumb: 'h-5 w-5',
            translate: 'translate-x-5',
        },
        lg: {
            wrapper: 'h-7 w-14',
            thumb: 'h-6 w-6',
            translate: 'translate-x-7',
        },
    };

    const currentSize = sizes[size];

    const handleClick = () => {
        if (disabled) return;

        onCheckedChange?.(!checked);
    };

    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={handleClick}
            className={cn(
                'relative inline-flex shrink-0 items-center rounded-sm',
                'outline-none transition-colors duration-200',
                'focus-visible:ring-2 focus-visible:ring-slate-400',
                'focus-visible:ring-offset-2',
                'dark:focus-visible:ring-slate-600',
                currentSize.wrapper,

                checked
                    ? `
                        bg-slate-900
                        dark:bg-slate-100
                    `
                    : `
                        bg-slate-200
                        dark:bg-slate-800
                    `,

                disabled && 'cursor-not-allowed opacity-50',
                !disabled && 'cursor-pointer',

                className,
            )}
            {...props}
        >
            <span
                className={cn(
                    'pointer-events-none block rounded-sm',
                    'bg-white shadow-sm',
                    'transition-transform duration-200',
                    'dark:bg-slate-900',
                    currentSize.thumb,
                    checked ? currentSize.translate : 'translate-x-0.5',
                )}
            />
        </button>
    );
}
