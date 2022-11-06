import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Resume from './Resume';

test('The basics data are displayed', () => {
    render(<Resume/>);
    expect(screen.getByText('Philippe CARLE')).toBeInTheDocument();
    expect(screen.getByText('c@rlephilip.pe')).toBeInTheDocument();
});


test('All Section titles are rendered', () => {
    render(<Resume/>);
    const headings = screen.getAllByRole('heading', { level: 2 });

    expect(headings[0]).toContainHTML('Experience');
    expect(headings[1]).toContainHTML('Interests');
    expect(headings[2]).toContainHTML('Volunteering');
    expect(headings[3]).toContainHTML('Certificates');
    expect(headings[4]).toContainHTML('Skills');
    expect(headings[5]).toContainHTML('Education');
    expect(headings[6]).toContainHTML('References');
})