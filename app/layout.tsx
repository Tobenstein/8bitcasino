import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'8-BIT Casino — After Hours at Lucky’s',description:'Good food. Bad decisions. Explore a pixel-art diner and the secret casino beneath it.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>;}
