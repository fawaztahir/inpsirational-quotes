import tailwindcss from "~/tailwind.css";

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
} from "@remix-run/react";
import { Analytics } from '@vercel/analytics/react';

export const meta = () => {
    return [
        { title: "Inspire yourself with uplifting quotes" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export const links = () => [
    ...(tailwindcss ? [{ rel: "stylesheet", href: tailwindcss }] : []),
];

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body className="bg-black text-white overflow-hidden">
                <Outlet />
                <Scripts />
                <LiveReload />
                <Analytics />
            </body>
        </html>
    );
}
