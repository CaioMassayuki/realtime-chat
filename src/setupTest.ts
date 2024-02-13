import '@testing-library/jest-dom';
// Mock scrollintoview to fix errors on tests
window.HTMLElement.prototype.scrollIntoView = vi.fn()