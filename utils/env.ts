export function validateEnv() {
  const requiredEnvVars = [
    'NEXT_PUBLIC_API_URL',
    'NEXT_PUBLIC_ENV',
    'DATABASE_URL',
    'NEXTAUTH_URL',
    'NEXTAUTH_SECRET',
    'STRIPE_PUBLIC_KEY',
    'STRIPE_SECRET_KEY',
  ] as const;

  const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

  if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
  }
}

// Call this in your app initialization
validateEnv();
