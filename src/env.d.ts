/// <reference types="astro/client" />

interface WhApiClient {
  getToken(): string;
  getPlan(): 'free' | 'pro' | 'api' | null;
  fetch(path: string, init?: RequestInit): Promise<Response>;
}

declare global {
  interface Window {
    whApi: WhApiClient;
    whRefreshAuth(): Promise<string | null>;
    pushHistory(tool: string, summary: string, input?: string): void;
    toolGetPreset?: () => unknown;
    toolSetPreset?: (config: unknown) => void;
  }
}
