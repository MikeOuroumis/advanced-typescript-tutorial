/**
 * Mapped Types in TypeScript
 *
 * Theory:
 * Mapped Types allow developers to create new types by transforming properties of existing types in a systematic way.
 * This feature is particularly useful for creating variations of existing types with modifications such as making properties optional,
 * read-only, or of a different type altogether.
 *
 * Basic Example of Mapped Type:
 * Below is a basic mapped type that takes an existing type and makes each of its properties optional.
 */
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type OptionalUser = Optional<User>;

// Usage of OptionalUser
const user: OptionalUser = {
  name: "Alice", // 'id' and 'age' are optional
};

/**
 * Advanced Mapped Type:
 * Creating a mapped type that transforms all properties to be read-only and of type string.
 */
type ReadonlyString<T> = {
  readonly [P in keyof T]: string;
};

type StringUser = ReadonlyString<User>;

// Usage of StringUser
const stringUser: StringUser = {
  id: "123",
  name: "Bob",
  age: "29",
};

/**
 * Utility to remove 'readonly' and '?' modifiers from a type
 * Useful for cases where you need to lock down a type that was previously more flexible.
 */
type Concrete<T> = {
  -readonly [P in keyof T]-?: T[P];
};

type FixedUser = Concrete<StringUser>;

// Example of removing modifiers
const fixedUser: FixedUser = {
  id: 123, // Error: 'number' is not assignable to 'string'
  name: "Charlie",
  age: 29, // Error: 'number' is not assignable to 'string'
};

/**
 * Explanation and Usage:
 * Mapped types are powerful for handling versions of types where you need to enforce consistency or modify the structure
 * for purposes like API calls, form handling, or state management in applications.
 * This flexibility allows developers to reuse base types while adapting them for specific cases.
 */
