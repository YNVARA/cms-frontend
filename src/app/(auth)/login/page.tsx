'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form-field';
import ThemeToggle from '@/components/ui/theme-toggle';

export default function Page() {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Please enter your email and password</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex w-full flex-col gap-4">
                        <FormField id="email" label="E-mail" required>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                leftElement={<Icon icon="griddy-icons:email-filled" />}
                            />
                        </FormField>
                        <FormField id="password" label="Password" required>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                leftElement={<Icon icon="mdi:password" />}
                            />
                        </FormField>
                        <Button type="submit">Login</Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <Link href="/register" className="flex w-full justify-center">
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                            I don't have an account
                        </span>
                    </Link>
                </CardFooter>
            </Card>
            <ThemeToggle />
        </>
    );
}
