import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                'w-full max-w-xl',
                'rounded-sm border',
                'border-slate-200 bg-white',
                'dark:border-slate-800 dark:bg-slate-950',
                className,
            )}
            {...props}
        />
    );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('w-full p-4', className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={cn(
                'text-2xl font-semibold',
                'text-slate-900 dark:text-slate-100',
                className,
            )}
            {...props}
        />
    );
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn('text-sm', 'text-slate-500 dark:text-slate-400', className)} {...props} />
    );
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('w-full p-4', className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('w-full p-4', className)} {...props} />;
}
