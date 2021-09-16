const environment = process.env.NODE_ENV;

export function isProduction(): boolean {
  return environment === "production";
}

export function isTest(): boolean {
  return environment === "test";
}

export function isDevelopment(): boolean {
  return environment === "development";
}

export function isClient(): boolean {
  return typeof window !== "undefined";
}

export function isServer(): boolean {
  return !isClient();
}
