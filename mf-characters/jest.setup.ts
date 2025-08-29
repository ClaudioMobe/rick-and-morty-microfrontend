import '@testing-library/jest-dom';

// Polyfill para TextEncoder/TextDecoder (necesario por react-router-dom en Jest)
import { TextEncoder, TextDecoder } from 'util';

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder as any;
