import * as React from 'react';
import Footerbar from '../navigation/footerbar';
import WebNavbar from '../navigation/webNavbar';
import MobileNavbar from '../navigation/mobileNavbar';

export default function Layout ({children}) {
    return (
        <>
            <header>
                <WebNavbar/>
                <MobileNavbar/>
            </header>

            <main className='bg-white'>
                {children}
            </main>

            <footer>
                <Footerbar/>
            </footer>
        </>
    )
}