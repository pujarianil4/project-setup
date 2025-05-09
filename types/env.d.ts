declare namespace NodeJS {
  interface IProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_ENV: 'development' | 'staging' | 'production';
    DATABASE_URL: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    STRIPE_PUBLIC_KEY: string;
    STRIPE_SECRET_KEY: string;
    ENABLE_FEATURE_X: string;
    ENABLE_FEATURE_Y: string;
    NEXT_PUBLIC_ANALYTICS_ID?: string;
    NEXT_PUBLIC_SENTRY_DSN?: string;
  }
}
