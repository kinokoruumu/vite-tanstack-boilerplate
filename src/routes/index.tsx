import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      <h1>Hello World!</h1>
      <Link to="/example">/example</Link>
    </div>
  ),
});
