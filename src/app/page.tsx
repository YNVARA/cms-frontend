'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Home() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-black text-white">
            <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-cyan-500/20 blur-[150px]" />
            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex items-center gap-2 rounded-sm border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300"
                >
                    <Icon icon="formkit:arrowright" />
                    Modern Next.js Starter
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl text-5xl font-black leading-tight md:text-7xl"
                >
                    Build Modern
                    <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {' '}
                        Web Applications
                    </span>
                    <br />
                    Faster Than Ever.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                    }}
                    className="mt-8 max-w-2xl text-lg text-slate-300"
                >
                    Build beautiful web applications using Next.js, Tailwind CSS, Framer Motion and
                    TypeScript. Everything you need for your next SaaS project.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.5,
                    }}
                    className="mt-12 flex flex-col gap-4 sm:flex-row"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="flex items-center justify-center gap-2 rounded-sm bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400"
                    >
                        Get Started
                        <Icon icon="formkit:arrowright" />
                    </motion.button>
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="rounded-sm border border-slate-700 bg-white/5 px-8 py-4 font-semibold backdrop-blur hover:bg-white/10"
                    >
                        Documentation
                    </motion.button>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.7,
                    }}
                    className="mt-24 grid w-full grid-cols-1 gap-6 md:grid-cols-3"
                >
                    {[
                        {
                            title: 'Next.js 15',
                            desc: 'Latest App Router with Server Components.',
                        },
                        {
                            title: 'Framer Motion',
                            desc: 'Smooth animations with minimal code.',
                        },
                        {
                            title: 'Tailwind CSS',
                            desc: 'Rapid UI development with utility classes.',
                        },
                    ].map((item) => (
                        <motion.div
                            key={item.title}
                            whileHover={{
                                y: -8,
                            }}
                            className="rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur"
                        >
                            <h3 className="text-xl font-bold">{item.title}</h3>

                            <p className="mt-3 text-slate-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
