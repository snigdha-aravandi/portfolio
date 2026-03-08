import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full py-8 text-center flex flex-col items-center justify-center border-t border-slate-800/50 mt-12 bg-background">
            <div className="text-center mt-4 flex flex-col gap-2">
                <p className="text-slate-500 font-mono text-sm">
                    Built and designed by Snigdha Aravandi.
                </p>
                <p className="text-slate-600 font-mono text-xs">
                    Thank you for visiting my portfolio.
                </p>
            </div>
        </footer>
    );
}
