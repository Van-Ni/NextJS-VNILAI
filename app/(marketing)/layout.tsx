
import React from 'react'
import { Navbar } from './_components/navbar'
import { Footer } from './_components/footer'

type Props = {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="h-full bg-slate-100">
            <Navbar />
            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MarketingLayout; 