import { lazy, Suspense } from "react";

import { createRootRoute, Outlet } from "@tanstack/react-router";

// https://tanstack.com/router/latest/docs/framework/react/devtools#only-importing-and-using-devtools-in-development
const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
