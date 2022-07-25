import { render } from '@testing-library/react';

import Firebase from './firebase';

describe('Firebase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Firebase />);
    expect(baseElement).toBeTruthy();
  });
});
