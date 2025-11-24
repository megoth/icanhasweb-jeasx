/* This file is an example. Delete it at will. */

import Layout from "./Layout";

// Cache recipes in memory to avoid unnecessary API calls
const POSTS = await (await fetch("http://localhost:3000/api/posts")).json();

/**
 * @this {import("./types").ThisContext}
 * @param {import("./types").RouteProps} props
 */
export default async function ({ request, reply }) {
  return (
    <Layout
      title={`title`}
      description={`description`}
    >
      <main>
        <h1>ICANHASWEB</h1>
      </main>
    </Layout>
  );
}
