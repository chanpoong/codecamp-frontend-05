import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import JestUnitTestPage from '../../pages/34-02-jest-unit-test';

it('rendering test', () => {
    render(<JestUnitTestPage />)

    const myText = screen.getByText('aaa')
    expect(myText).toBeInTheDocument()
});