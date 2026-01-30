'use client';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function ReportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Sidebar>
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
        </Sidebar>
    );
}
