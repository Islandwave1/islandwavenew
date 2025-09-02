import Navbar from './Navbar'
import Footer from './Footer'
export default function Layout({children}){ return (<div className='min-h-screen'><Navbar/><main className='container py-8'>{children}</main><Footer/></div>) }
