import { createFileRoute } from "@tanstack/react-router";
import { ExamplePage } from "~/features/example/routes/example";

export const Route = createFileRoute("/example")({
  component: ExamplePage,
});
