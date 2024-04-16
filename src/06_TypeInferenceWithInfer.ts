/**
 * Type Inference with 'infer' in TypeScript
 *
 * Theory:
 * The 'infer' keyword in TypeScript is used within the context of conditional types to declare a type variable
 * that TypeScript can automatically infer based on the context. This feature enables more dynamic and adaptable type definitions.
 */

/**
 * Example 1: Extracting Return Type of a Function
 * This example demonstrates how to use 'infer' to capture the return type of a function dynamically.
 * We use the name CustomReturnType because ReturnType is already reserved by Typescript
 */
type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function multiply(x: number, y: number): number {
  return x * y;
}

const result: CustomReturnType<typeof multiply> = multiply(10, 2);
console.log("Result:", result); // Output should be a number (20)

/**
 * Example 2: Extracting Type from a Promise
 * This example shows how to extract the resolved type of a Promise using 'infer'.
 */
type UnpackPromise<T> = T extends Promise<infer U> ? U : never;

async function fetchData(): Promise<string> {
  return "Data from API";
}

async function demoAsyncOperations() {
  type FetchedData = UnpackPromise<CustomReturnType<typeof fetchData>>;
  const data: FetchedData = await fetchData();
  console.log("Fetched Data:", data); // Output should be a string ("Data from API")
}

demoAsyncOperations();

/**
 * Example 3: Inferring Types within Tuples
 * This example uses 'infer' to extract and use types from within a tuple, allowing for precise operations on tuple elements.
 */
type FirstElement<T> = T extends [infer U, ...any[]] ? U : never;

type MyTuple = [string, number, boolean];
const firstElement: FirstElement<MyTuple> = "Hello World";
console.log("First Element of Tuple:", firstElement); // Output should be a string ("Hello World")

/**
 * Example 4: Conditional Type Chains with 'infer'
 * Here we use 'infer' in more complex conditional type chains to determine a type based on nested conditions.
 */
type ElementType<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer V
  ? V
  : never;

const element: ElementType<number[]> = 123; // Should be number
const functionResult: ElementType<typeof multiply> = 456; // Should also be number

console.log("Element:", element); // Output: 123
console.log("Function Result:", functionResult); // Output: 456
