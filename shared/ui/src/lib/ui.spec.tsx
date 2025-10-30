import { render } from '@testing-library/react';

import CondoAppUi from './ui';

describe('CondoAppUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CondoAppUi />);
    expect(baseElement).toBeTruthy();
  });
});
