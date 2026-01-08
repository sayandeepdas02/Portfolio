"use client";

import Link from "next/link";
import { Github, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-edge bg-background/80">
            <div className="px-4 h-14 flex items-center justify-between">
                {/* Left: Portfolio Title */}
                <Link href="/" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                    Portfolio
                </Link>

                {/* Center: Navigation Links */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => scrollToSection('education')}
                        className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Education
                    </button>
                </div>

                {/* Right: GitHub & Dark Mode */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/sayandeepdas02/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={18} strokeWidth={1.5} />
                    </a>
                    <button
                        onClick={toggleTheme}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
