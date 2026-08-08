'use client';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import {
    Navbar,
    NavbarContainer,
    NavbarBrand,
    NavbarContent,
    NavbarNav,
    NavbarItem,
    NavbarActions,
    NavbarMobileTrigger,
    NavbarMobileMenu,
    NavbarMobileLink,
    NavbarMobileDivider,
} from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import ThemeToggle from '@/components/ui/theme-toggle';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar>
                <NavbarContainer>
                    <NavbarBrand>
                        <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
                            YNVARA
                        </Link>
                    </NavbarBrand>
                    <NavbarContent>
                        <NavbarNav>
                            <NavbarItem active>
                                <Link href="/">Home</Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link href="/">About</Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link href="/">Services</Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link href="/">Portfolio</Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link href="/">Contact</Link>
                            </NavbarItem>
                        </NavbarNav>
                        <NavbarActions>
                            <ThemeToggle />
                            <Button>Login</Button>
                        </NavbarActions>
                    </NavbarContent>
                    <NavbarMobileTrigger>
                        <ThemeToggle />
                        <IconButton
                            variant="ghost"
                            aria-label="Toggle menu"
                            icon={<Icon icon="griddy-icons:menu" />}
                        />
                    </NavbarMobileTrigger>
                </NavbarContainer>
                <NavbarMobileMenu>
                    <NavbarMobileLink href="/">Home</NavbarMobileLink>
                    <NavbarMobileLink href="/">About</NavbarMobileLink>
                    <NavbarMobileLink href="/">Contact</NavbarMobileLink>
                    <NavbarMobileDivider />
                    <NavbarMobileLink href="/">Settings</NavbarMobileLink>
                    <NavbarMobileLink href="/">Log out</NavbarMobileLink>
                </NavbarMobileMenu>
            </Navbar>
            <main>{children}</main>
        </>
    );
}
