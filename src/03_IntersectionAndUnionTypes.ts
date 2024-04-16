/**
 * Intersection and Union Types in TypeScript
 *
 * Theory:
 * Intersection and Union types allow for the combination and selection of types in versatile ways, enhancing the flexibility and robustness of type design.
 *
 * Intersection Types:
 * - Combine multiple types into one, ensuring that the resulting type includes all properties of the combined types.
 * - Useful for mixing multiple entities into a single type that possesses all their attributes.
 *
 * Union Types:
 * - Define a variable that can hold values of different types, but only one at a time.
 * - Useful for functions that need to accept multiple types and handle them differently based on their type.
 *
 * Example: Combining a BusinessPartner with a Contact
 * An intersection type example that merges business and contact details into a single type.
 */
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact; // Intersection type

function createCustomer(
  name: string,
  credit: number,
  email: string,
  phone: string
): Customer {
  return { name, credit, email, phone };
}

const customer = createCustomer(
  "Alice",
  5000,
  "alice@example.com",
  "123-456-7890"
);
console.log(customer);

/**
 * Example: Format Input Function
 * A union type example demonstrating a function that accepts both string and number types but processes them differently.
 */
function formatInput(input: string | number) {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toFixed(2);
}

console.log(formatInput("hello")); // Outputs: "HELLO"
console.log(formatInput(0.1234)); // Outputs: "0.12"

/**
 * Usage:
 * These examples illustrate how intersection and union types can be utilized in functions to ensure type safety while dealing with complex data structures and various input types.
 * Intersection types are especially useful when objects need to fulfill multiple roles combined under a single interface.
 * Union types offer flexibility in function parameters, allowing for varied input types and corresponding logic to handle each type appropriately.
 */
