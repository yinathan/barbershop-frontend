import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'


export default function Main(props) {
    return(
        <main>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/barbers/:id" element={<Main />} />
            </Routes>
        </main>
    )
}