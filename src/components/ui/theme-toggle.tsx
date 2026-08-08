'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Icon } from '@iconify/react';
import { IconButton } from './icon-button';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-10 w-10 rounded-sm bg-slate-100 dark:bg-slate-800" />;
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <IconButton
            variant="ghost"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            icon={
                <Icon
                    icon={isDark ? 'mdi:moon-waning-crescent' : 'solar:sun-bold-duotone'}
                    className="h-5 w-5"
                />
            }
        />
    );
}
