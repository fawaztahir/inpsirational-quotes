import tailwindcss from "~/tailwind.css";

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    NavLink,
} from "@remix-run/react";
import { Analytics } from '@vercel/analytics/react';

export const meta = () => {
    return [
        { title: "Inspiring Quotes for Life and Success | Inspirational Quotes" },
        { name: "description", content: "Discover a collection of inspirational quotes that ignite motivation and empower success. Explore timeless wisdom, motivational sayings, and life-affirming quotes" },
    ];
};

export const links = () => [
    { rel: 'shortcut icon', href: '/favicons/favicon-32x32.png' },
    ...(tailwindcss ? [{ rel: "stylesheet", href: tailwindcss }] : []),
];

export default function App() {
    const activeLink = ({ isActive, isPending }) => {
        const classes = ['px-5 py-1.5 mx-2.5', 'text-gray-300 border border-transparent focus:outline-none font-medium rounded-full'];
        if (isPending) {
            classes.push('animate-pulse');
        }
        if (isActive) {
            // classes.splice(classes.indexOf('border-transparent'), 1);
            classes.push('border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700')
        }

        return classes.join(' ');
    };

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body className="bg-black text-white overflow-hidden">
            <header className="flex justify-center items-center py-4 fixed top-0 w-full">
                <NavLink to="/" className={activeLink}>Home</NavLink>
                <NavLink to="/about" className={activeLink}>About</NavLink>
                <NavLink to="/contact" className={activeLink}>Contact</NavLink>
            </header>
                <Outlet />
                <Scripts />
                <LiveReload />
                <Analytics />
            </body>
        </html>
    );
}
