'use client';
import { useState, useRef, useEffect, createContext, useContext } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils/cn';

// Context to share mobile menu state
const MobileMenuContext = createContext<{
    isOpen: boolean;
    toggle: () => void;
}>({ isOpen: false, toggle: () => {} });

export function Navbar({ children, className, ...props }: HTMLAttributes<HTMLElement>) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <MobileMenuContext.Provider
            value={{
                isOpen: isMobileMenuOpen,
                toggle: () => setIsMobileMenuOpen(!isMobileMenuOpen),
            }}
        >
            <nav
                className={cn(
                    'sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95',
                    className,
                )}
                {...props}
            >
                {children}
            </nav>
        </MobileMenuContext.Provider>
    );
}

export function NavbarContainer({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'mx-auto flex h-16 w-full max-w-7xl justify-between items-center px-4 sm:px-6 lg:px-8',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function NavbarBrand({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('flex shrink-0 items-center', className)} {...props}>
            {children}
        </div>
    );
}

export function NavbarContent({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn('hidden flex-1 items-center justify-between md:flex', className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function NavbarNav({ children, className, ...props }: HTMLAttributes<HTMLElement>) {
    return (
        <nav className={cn('ml-8 flex items-center gap-1', className)} {...props}>
            {children}
        </nav>
    );
}

export function NavbarItem({
    children,
    active = false,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement> & { active?: boolean }) {
    return (
        <div
            className={cn(
                'rounded-sm px-3 py-2 text-sm font-medium transition-colors',
                active
                    ? 'font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function NavbarActions({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('flex items-center gap-2', className)} {...props}>
            {children}
        </div>
    );
}

export function NavbarMobileTrigger({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { toggle } = useContext(MobileMenuContext);
    return (
        <div className={cn('flex items-center md:hidden', className)} onClick={toggle} {...props}>
            {children}
        </div>
    );
}

export function NavbarMobileMenu({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { isOpen } = useContext(MobileMenuContext);
    if (!isOpen) return null;
    return (
        <div
            className={cn(
                'md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4',
                className,
            )}
            {...props}
        >
            <nav className="flex flex-col gap-2">{children}</nav>
        </div>
    );
}

export function NavbarMobileLink({
    children,
    className,
    ...props
}: LinkProps & HTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link
            className={cn(
                'px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-sm',
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}

export function NavbarMobileDivider() {
    return <hr className="my-2 border-slate-200 dark:border-slate-800" />;
}

// Dropdown
interface NavbarDropdownRenderProps {
    isOpen: boolean;
    toggle: () => void;
}

interface NavbarDropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    children: ReactNode | ((props: NavbarDropdownRenderProps) => ReactNode);
}

export function NavbarDropdown({ children, className, ...props }: NavbarDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={ref} className={cn('relative', className)} {...props}>
            {typeof children === 'function'
                ? children({ isOpen, toggle: () => setIsOpen(!isOpen) })
                : children}
        </div>
    );
}

export function NavbarDropdownTrigger({
    children,
    onClick,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div onClick={onClick} className={cn('cursor-pointer', className)} {...props}>
            {children}
        </div>
    );
}

export function NavbarDropdownContent({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'absolute right-0 top-full mt-2 w-48 rounded-md border border-slate-200 bg-white p-1 shadow-lg dark:border-slate-800 dark:bg-slate-900',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function NavbarDropdownItem({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'rounded-sm px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}
