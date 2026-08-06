import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login | YNVARA',
    description: 'The personal website of YNVARA, a software engineer and open-source enthusiast.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
