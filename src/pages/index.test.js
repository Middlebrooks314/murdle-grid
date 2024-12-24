import { render, screen } from '@testing-library/react'
import Home from './index'


describe('Home', () => {
    it('renders the Murdle Grid title', () => {
        render(<Home />)
        const heading = screen.getByRole('heading', { name: /murdle grid/i })
        expect(heading).toBeInTheDocument()
    })
})
