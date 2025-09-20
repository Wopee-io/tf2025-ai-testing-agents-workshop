# Cheat sheet for experiments with AI Testing Agent

## Experiment 4: Simple AI Testing Agent - Product ordering

```typescript
// Ordering by price
export const userPrompt = `
  Test purchasing process.
  Test scenario to order products by price.
  Validate that products are ordered by price from lowest to highest.
`;
```

```typescript
export const select = tool({
  description: "Select an option in a SELECT element on the page.",
  parameters: z.object({
    locator: z.string().describe("Element locator."),
    value: z.string().describe("The option value to select."),
  }),
  execute: async ({ locator, value }) => {
    try {
      assertPage(page);
      await page.selectOption(locator, value);
      return `Selected value "${value}" in element matching locator: ${locator}`;
    } catch (error) {
      return handleError(error, "select");
    }
  },
});
```

## Experiment 4: Simple AI Testing Agent - Login

```typescript
// Login with locked_out_user
export const userPrompt = `
  Test login procedure.
  Login with \`locked_out_user\` credentials
`;
```

```typescript
// Login with problem_user
export const userPrompt = `
  Test login procedure.
  Login with \`problem_user\` credentials
`;
```

```typescript
// Login with performance_glitch_user
export const userPrompt = `
  Test login procedure.
  Login with \`performance_glitch_user\` credentials
`;
```