import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export function Button({
    children,
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    disabled,
    type = 'button',
    ...props
}: ButtonProps) {
    const variants: Record<ButtonVariant, string> = {
        primary: `
            bg-slate-900
            text-white
            hover:bg-slate-800

            dark:bg-slate-100
            dark:text-slate-900
            dark:hover:bg-slate-200
        `,

        secondary: `
            bg-slate-100
            text-slate-900
            hover:bg-slate-200

            dark:bg-slate-800
            dark:text-slate-100
            dark:hover:bg-slate-700
        `,

        outline: `
            border
            border-slate-200
            bg-white
            text-slate-900
            hover:bg-slate-50

            dark:border-slate-800
            dark:bg-slate-950
            dark:text-slate-100
            dark:hover:bg-slate-900
        `,

        ghost: `
            bg-transparent
            text-slate-700
            hover:bg-slate-100

            dark:text-slate-300
            dark:hover:bg-slate-800
        `,

        danger: `
            bg-red-600
            text-white
            hover:bg-red-700

            dark:bg-red-500
            dark:text-white
            dark:hover:bg-red-600
        `,
    };

    const sizes: Record<ButtonSize, string> = {
        sm: 'h-9 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
    };

    return (
        <button
            type={type}
            disabled={disabled || loading}
            className={cn(
                `
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-sm
                    font-medium
                    whitespace-nowrap
                    outline-none
                    transition-colors

                    focus-visible:ring-2
                    focus-visible:ring-slate-400
                    focus-visible:ring-offset-2

                    dark:focus-visible:ring-slate-600

                    disabled:cursor-not-allowed
                    disabled:opacity-50
                `,

                variants[variant],
                sizes[size],

                fullWidth && 'w-full',

                className,
            )}
            {...props}
        >
            {loading && (
                <span
                    className="
                        h-4 w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-current
                        border-t-transparent
                    "
                    aria-hidden="true"
                />
            )}

            {!loading && leftIcon && (
                <span className="shrink-0" aria-hidden="true">
                    {leftIcon}
                </span>
            )}

            <span>{children}</span>

            {!loading && rightIcon && (
                <span className="shrink-0" aria-hidden="true">
                    {rightIcon}
                </span>
            )}
        </button>
    );
}
