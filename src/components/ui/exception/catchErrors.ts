export function handleError(e: unknown): never {
  // Use type assertion to access properties safely
  const message =
    (e as { response?: { data?: { message?: string | string[] } } }).response
      ?.data?.message || "Network Error";
  if (Array.isArray(message)) {
    const error = message.join("\n");
    throw new Error(error);
  }
  throw new Error(message);
}
