import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Companion AI - Revolutionary Computer Automation & Agentic AI Framework for Windows',
  description: 'The first artificial intelligence assistant that actually uses your computer through native OS integration. Automate workflows across 2,700+ Windows applications with advanced computer use capabilities, MCP server integration, and intelligent tool use. Our agentic framework saves 10-20 hours weekly through sophisticated workflow automation and computer automation technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
} 