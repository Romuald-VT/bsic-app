import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'

export default function Layout({ children }: { children: React.ReactNode }) 
{
    return(
        <html>
            <body>
            <ToastContainer/>
                {children}
            </body>
        </html>
    )
}
