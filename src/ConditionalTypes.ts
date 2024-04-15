/**
 * Conditional Types in TypeScript
 *
 * Theory:
 * Conditional Types allow TypeScript to select types based on a condition during compilation. They work similarly to ternary operators in JavaScript but operate on types.
 * This feature enables developers to write flexible and reusable type definitions that adapt based on the inputs they receive.
 *
 * Example: `example` Function
 * This function demonstrates the use of conditional types to determine if a given parameter is of type boolean. Based on this check, it returns a specific string that indicates whether the input type is boolean.
 *
 * Usage:
 * The function is called with any type of input, and it evaluates whether the input is a boolean. Depending on the input type, it returns either "Type is boolean" or "Type is not boolean".
 *
 * @param x - The input parameter whose type is to be checked.
 * @returns A string indicating whether the input is of type boolean.
 * @template T - This represents a type variable that the function takes as input. The actual type of this variable is checked against boolean in the conditional type.
 */
function example<T>(x: T): T extends boolean ? boolean : string {
  return (
    typeof x === "boolean" ? true : "Type is not boolean"
  ) as T extends boolean ? boolean : string;
}

// Testing the example function with different types of inputs
console.log(example(true)); // Should output: "Type is boolean"
console.log(example(123)); // Should output: "Type is not boolean"

/**
 * Real-World Example: Handling API Responses
 *
 * This example demonstrates using conditional types to create a function that processes different types of API responses based on their structure.
 * A common scenario in web applications is handling responses where the structure varies depending on the success or failure of the API request.
 *
 * Example: `handleApiResponse` Function
 * This function uses a conditional type to check the structure of the API response and process it accordingly.
 *
 * @param response - The API response which can either be a success or error type.
 * @template T - This represents the expected type of the data in a successful API response.
 * @returns Processed data based on the response type.
 */
interface SuccessResponse<T> {
  status: "success";
  data: T;
}

interface ErrorResponse {
  status: "error";
  error: string;
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

type ProcessedResponse<T> = T extends { status: "success"; data: infer U }
  ? U
  : string;

function handleApiResponse<T>(
  response: ApiResponse<T>
): ProcessedResponse<ApiResponse<T>> {
  if (response.status === "success") {
    return response.data; // Automatically inferred as U (type of data)
  } else {
    return `Error: ${response.error}`; // Automatically inferred as string
  }
}

// Example usage of handleApiResponse
const successResponse: ApiResponse<{ user: string; age: number }> = {
  status: "success",
  data: { user: "Alice", age: 30 },
};
console.log(handleApiResponse(successResponse)); // Outputs the data object { user: "Alice", age: 30 }

const errorResponse: ApiResponse<any> = {
  status: "error",
  error: "Failed to fetch data",
};
console.log(handleApiResponse(errorResponse)); // Outputs "Error: Failed to fetch data"
