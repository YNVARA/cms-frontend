import ThemeToggle from '@/components/common/theme-toggle';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-black">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-b from-zinc-100 via-white to-white dark:from-zinc-950 dark:via-black dark:to-black" />

            {/* Glow */}
            <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-black/5 blur-[180px] dark:bg-white/10" />

            <div className="absolute bottom-0 left-1/2 h-87.5 w-87.5 -translate-x-1/2 rounded-full bg-black/5 blur-[120px] dark:bg-white/5" />

            {/* Grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(circle at center, black 45%, transparent 100%)',
                    WebkitMaskImage:
                        'radial-gradient(circle at center, black 45%, transparent 100%)',
                }}
            >
                {/* Dark Grid Overlay */}
                <div
                    className="absolute inset-0 hidden dark:block"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)
                        `,
                        backgroundSize: '48px 48px',
                    }}
                />
            </div>

            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[url('/noise.png')]" />

            <div className="relative z-10 w-full">
                <ThemeToggle />
                {children}
            </div>
        </main>
    );
}
