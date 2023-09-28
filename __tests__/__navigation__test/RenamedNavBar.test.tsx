import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RenamedNavBar from '../../components/NavBar/index';
import { navbarLeftLinks, navbarRightLinks } from '../../components/NavBar/data/navData';

describe('RenamedNavBar Component', () => {
    it('renders without crashing', () => {
        render(<RenamedNavBar />);
        expect(screen.getByText(navbarLeftLinks[0])).toBeInTheDocument();
        expect(screen.getByText(navbarRightLinks[0])).toBeInTheDocument();
    });

    it('renders all navbarLeftLinks', () => {
        render(<RenamedNavBar />);
        navbarLeftLinks.forEach(link => {
            expect(screen.getByText(link)).toBeInTheDocument();
        });
    });

    it('renders all navbarRightLinks', () => {
        render(<RenamedNavBar />);
        navbarRightLinks.forEach(link => {
            expect(screen.getByText(link)).toBeInTheDocument();
        });
    });

    it('applies correct class to the link items', () => {
        render(<RenamedNavBar />);
        navbarLeftLinks.concat(navbarRightLinks).forEach(link => {
            expect(screen.getByText(link)).toHaveClass('newItem');
        });
    });
});
