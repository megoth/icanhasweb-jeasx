/* This file is an example. Delete it at will. */

import Layout from "./Layout";

/**
 * @this {import("./types").ThisContext}
 * @param {import("./types").RouteProps} props
 */
export default async function ({ request, reply }) {
  return (
    <Layout title={"title"} description={"description"}>
      <main>Stuff</main>
    </Layout>
  );
}
