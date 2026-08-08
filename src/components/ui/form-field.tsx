import type { ReactNode } from 'react';

import { FormLabel } from './form-label';

interface FormFieldProps {
    id?: string;
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    children: ReactNode;
}

export function FormField({
    id,
    label,
    description,
    error,
    required = false,
    children,
}: FormFieldProps) {
    return (
        <div className="flex w-full flex-col gap-1.5">
            {label && (
                <FormLabel htmlFor={id} required={required}>
                    {label}
                </FormLabel>
            )}

            {children}

            {description && !error && (
                <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
            )}

            {error && (
                <p className="text-xs text-red-500 dark:text-red-400" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
