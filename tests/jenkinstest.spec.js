// tests/jenkinstest.spec.js
import { test, expect } from '@playwright/test';

test('Jenkins Test - simple addition', async ({}) => {
    expect(1 + 1).toBe(2);
});
