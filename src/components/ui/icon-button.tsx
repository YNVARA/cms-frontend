import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type IconButtonVariant = 'default' | 'outline' | 'ghost' | 'danger';

type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    loading?: boolean;
}

export function IconButton({
    icon,
    variant = 'default',
    size = 'md',
    loading = false,
    disabled,
    className,
    type = 'button',
    ...props
}: IconButtonProps) {
    const variants: Record<IconButtonVariant, string> = {
        default: `
            bg-slate-100
            text-slate-700
            hover:bg-slate-200

            dark:bg-slate-800
            dark:text-slate-200
            dark:hover:bg-slate-700
        `,

        outline: `
            border
            border-slate-200
            bg-white
            text-slate-700
            hover:bg-slate-50

            dark:border-slate-800
            dark:bg-slate-950
            dark:text-slate-200
            dark:hover:bg-slate-900
        `,

        ghost: `
            bg-transparent
            text-slate-600
            hover:bg-slate-100

            dark:text-slate-400
            dark:hover:bg-slate-800
        `,

        danger: `
            bg-red-50
            text-red-600
            hover:bg-red-100

            dark:bg-red-950
            dark:text-red-400
            dark:hover:bg-red-900
        `,
    };

    const sizes: Record<IconButtonSize, string> = {
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
    };

    return (
        <button
            type={type}
            disabled={disabled || loading}
            className={cn(
                `
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    rounded-sm

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

                className,
            )}
            {...props}
        >
            {loading ? (
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
            ) : (
                <span className="flex items-center justify-center" aria-hidden="true">
                    {icon}
                </span>
            )}
        </button>
    );
}
