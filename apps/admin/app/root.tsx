import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { MantineProvider } from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';

import { theme } from './theme';
import Navigation from './components/navigation';
import EventDataDisplay from './components/event-data-display';
export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Web.TV Admin App',
    viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
    return (
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            <html lang="en">
                <head>
                    <Meta />
                    <Links />
                </head>
                <body>
                    <Navigation />
                    <Outlet />
                    <EventDataDisplay />
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </body>
            </html>
        </MantineProvider>
    );
}
