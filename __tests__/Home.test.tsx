import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home Component', () => {
	beforeEach(() => {
		render(<Home />);
	});

	it('test', () => {
		expect(screen.getByText('next')).toBeInTheDocument();
	});
});
