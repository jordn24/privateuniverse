import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://meowfacts.herokuapp.com/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.error();
    }
}
