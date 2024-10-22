/**
 * Pauses execution for a specified number of milliseconds.
 * 
 * @param ms - The number of milliseconds to sleep (1/1000 sec).
 * @returns A promise that resolves after the specified time.
 */
export const msleep = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
