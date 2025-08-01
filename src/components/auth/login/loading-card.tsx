"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CircleX, Loader2 } from "lucide-react";

export default function LoadingLoginCard() {
  return (
    <>
      <Card className="mx-auto max-w-96 border-red-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-red-300">
            <CircleX />
          </CardTitle>
          <CardDescription>Realizando login</CardDescription>
        </CardHeader>
        <CardContent className="underline">
          <Loader2 className="animate-spin" />
        </CardContent>
      </Card>
    </>
  );
}
