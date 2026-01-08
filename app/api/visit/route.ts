import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "visitor-count.json");

// Ensure data directory exists
function ensureDataFile() {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify({ count: 0 }));
    }
}

// Get current count
function getCount(): number {
    ensureDataFile();
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data).count;
}

// Increment and save count
function incrementCount(): number {
    ensureDataFile();
    const currentCount = getCount();
    const newCount = currentCount + 1;
    fs.writeFileSync(DATA_FILE, JSON.stringify({ count: newCount }));
    return newCount;
}

// GET: Return current count
export async function GET() {
    try {
        const count = getCount();
        return NextResponse.json({ count });
    } catch (error) {
        console.error("Error getting visitor count:", error);
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}

// POST: Increment and return new count
export async function POST() {
    try {
        const count = incrementCount();
        return NextResponse.json({ count });
    } catch (error) {
        console.error("Error incrementing visitor count:", error);
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}
