import Layout from "./Layout";

export default async function () {
  return (
    <Layout
      title={`title`}
      description={`description`}
    >
      <main>
        <h1>ICANHASWEB</h1>
        <nav>
          <ul>
            <li>
              <a href="/projects">Code (projects)</a>
            </li>
            <li>
              <a href="/blog">Blog (old texts)</a>
            </li>
          </ul>
        </nav>
      </main>
    </Layout>
  );
}
