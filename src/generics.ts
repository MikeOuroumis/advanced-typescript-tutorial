/**
 * Generics in TypeScript
 *
 * Theory:
 * Generics provide a way to create reusable components that can work over a variety of types rather than a single one.
 * This flexibility allows developers to write more general, abstract functions, interfaces, and classes without sacrificing type safety.
 *
 * Example: `getFirstElement` Function
 * This generic function demonstrates how to use generics to accept any array type and return the type of its first element.
 * The function leverages TypeScript's type inference to automatically determine the specific type when the function is called.
 *
 * Usage:
 * The function is called with an array of any type (e.g., number, string, or a custom object), and it will return the first element of that array.
 * If the array is empty, it returns `undefined`.
 *
 * @param arr - The array from which to extract the first element.
 * @returns The first element of the array or undefined if the array is empty.
 * @template T - The type of elements in the array. This represents a type variable that will be replaced with the actual type of the elements when the function is used.
 */
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const numbers = [1, 2, 3];
console.log(getFirstElement(numbers)); // Outputs: 1
