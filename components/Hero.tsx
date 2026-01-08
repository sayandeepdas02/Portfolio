"use client";

import { Github, Linkedin, Mail, FileText, Twitter, Code2, Check, Copy, MapPin, Phone, Globe, Clock, User } from "lucide-react";
import Image from "next/image";
import { socialLinks, resumeUrl, emailAddress, location, gender, mobileNumber, role } from "@/data/social";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
    const [showEmailDropdown, setShowEmailDropdown] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "Github":
                return Github;
            case "Linkedin":
                return Linkedin;
            case "Twitter":
                return Twitter;
            case "Code2":
                return Code2;
            case "Mail":
                return Mail;
            default:
                return Mail;
        }
    };

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowEmailDropdown(!showEmailDropdown);
        setEmailCopied(false);
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setEmailCopied(true);
            setTimeout(() => {
                setEmailCopied(false);
                setShowEmailDropdown(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowEmailDropdown(false);
            }
        };

        if (showEmailDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showEmailDropdown]);

    // Get current time in India
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const indiaTime = now.toLocaleTimeString('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            setCurrentTime(indiaTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="screen-line-after flex border-x border-edge">
            <div className="shrink-0 border-r border-edge">
                <div className="mx-0.5 my-0.75">
                    <Image
                        className="size-32 sm:size-40 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none object-cover"
                        alt="Sayandeep Das's avatar"
                        src="/profile.jpg"
                        width={160}
                        height={160}
                        priority
                    />
                </div>

                {/* Indian Flag */}
                <a
                    href="https://www.india.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-0 -left-px"
                >
                    <div className="h-8 sm:h-9 w-12 sm:w-14 rounded-br-md overflow-hidden border-r border-b border-edge">
                        <Image
                            src="/indian-flag.png"
                            alt="India"
                            width={56}
                            height={36}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </a>
            </div>

            <div className="flex flex-1 flex-col">
                <div className="flex grow items-end pb-1 pl-4">
                    {/* Decorative element removed for cleaner look */}
                </div>

                <div className="border-t border-edge">
                    <div className="flex items-center gap-2 pl-4">
                        <h1 className="-translate-y-px text-3xl font-semibold">
                            Sayandeep Das
                        </h1>

                        {/* Verified Icon */}
                        <svg
                            className="size-4.5 text-info select-none"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-label="Verified"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>

                    <div className="h-12.5 border-t border-edge py-1 pl-4 sm:h-9 flex items-center">
                        <p className="font-mono text-sm text-muted-foreground">
                            {role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
