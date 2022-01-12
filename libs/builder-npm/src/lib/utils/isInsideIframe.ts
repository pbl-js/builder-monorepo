import { getWindow } from 'ssr-window';

const window = getWindow();

export const isInsideIframe = window.location !== window.parent.location;
