import Layout from "@/components/Layout";
import withAuth from "@/hooks/ssr/with-auth";

export default function Home({ account }) {
  return (
    <Layout account={account}>
    </Layout>
  )
}

export const getServerSideProps = withAuth;