"use client";

import ErrorCard from "@/components/auth/login/error-card";

export default function LoginPageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorCard errorMessage={error.message} reset={reset} />;
}
