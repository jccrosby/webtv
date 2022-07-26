import { render } from '@testing-library/react';

import InningBreakVideo from './index';

describe('InningBreakVideo', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<InningBreakVideo />);
        expect(baseElement).toBeTruthy();
    });
});
