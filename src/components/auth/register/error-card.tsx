"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CircleX } from "lucide-react";

export default function ErrorCard({
  errorMessage,
  reset,
}: {
  errorMessage: string;
  reset: () => void;
}) {
  return (
    <>
      <Card className="mx-auto max-w-96 border-red-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-red-300">
            <CircleX />
            Ops...
          </CardTitle>
          <CardDescription>Ocorreu um erro</CardDescription>
        </CardHeader>
        <CardContent className="underline">{errorMessage}</CardContent>
        <CardFooter className="flex justify-center">
          <Button variant={"outline"} onClick={reset}>
            Tentar novamente
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
