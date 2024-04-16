/**
 * Utility Types in TypeScript
 *
 * Theory:
 * TypeScript provides several utility types that help manipulate types in various ways,
 * enhancing flexibility and providing powerful tools to transform type properties. These utilities
 * include Partial, Readonly, Pick, and Record, each serving specific transformations.
 *
 * 1. Partial<T>
 * Converts all properties of a type T to be optional. This is useful when you want to create a type
 * that does not require all the properties of another type, especially when creating partial updates or configurations.
 */
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = Partial<User>; // all properties of User are optional

// Example usage of Partial<T>
const updateUser = (id: number, updates: PartialUser) => {
  console.log(`Updating user ${id} with`, updates);
};

updateUser(1, { name: "Alice" }); // Only name is updated, age is optional

/**
 * 2. Readonly<T>
 * Makes all properties of a type T read-only. This utility prevents reassignment of properties,
 * which is particularly useful for configurations or settings that should not be changed after initialization.
 */
type ReadonlyUser = Readonly<User>;

// Example usage of Readonly<T>
const newUser: ReadonlyUser = { id: 1, name: "Bob", age: 30 };
// newUser.name = "Alice"; // This line would cause an error because properties are read-only.

/**
 * 3. Pick<T, K>
 * Allows you to create a type by picking a set of properties K from a type T.
 * This is useful when you need to create types that only use a subset of another type's properties.
 */
type UserContactDetails = Pick<User, "name" | "age">;

// Example usage of Pick<T>
const contactUser = (userDetails: UserContactDetails) => {
  console.log(
    `Contacting ${userDetails.name} who is ${userDetails.age} years old.`
  );
};

contactUser({ name: "Charlie", age: 25 });

/**
 * 4. Record<K, T>
 * Constructs an object type whose property keys are K and whose property values are T.
 * This is extremely useful for creating dictionaries or objects where all properties share the same type.
 */
type UserId = number;
type UsersRecord = Record<UserId, User>;

// Example usage of Record<K, T>
const users: UsersRecord = {
  1: { id: 1, name: "David", age: 28 },
  2: { id: 2, name: "Emma", age: 35 },
};

console.log("Users Record:", users);

/**
 * Usage:
 * These utility types are essential for managing type transformations in TypeScript. They offer
 * flexibility and robust tools for handling immutability, optional properties, and subsetting or mapping types.
 */

// This script provides an overview and practical examples of each utility type discussed.
