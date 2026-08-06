'use client';

import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            aria-pressed={isDark}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`
                relative inline-flex h-8 w-16 items-center rounded-sm
                border border-zinc-300 bg-zinc-200
                transition-all duration-300 ease-in-out
                hover:scale-105 active:scale-95
                dark:border-zinc-700 dark:bg-zinc-800
            `}
        >
            <span
                className={`
                    absolute left-1 flex h-6 w-6 items-center justify-center
                    rounded-sm bg-zinc-100 shadow-sm
                    transition-all duration-300 ease-in-out
                    dark:translate-x-8 dark:bg-zinc-900
                `}
            >
                {isDark ? (
                    // <Moon className="h-3.5 w-3.5 text-zinc-200" />
                    <Icon icon="mdi:moon-waning-crescent" className="h-3.5 w-3.5 text-zinc-200" />
                ) : (
                    <Icon icon="mdi:sun" className="h-4 w-4 text-zinc-900" />
                )}
            </span>
        </button>
    );
}
