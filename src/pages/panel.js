import Layout from "@/components/Layout";
import withAuth from "@/hooks/ssr/with-auth";
import Users from "@/components/Panel/Users";

export default function Panel({ account }) {
  return (
    <Layout
      account={account}
      title="Panel"
      sx={{
        marginTop: 4,
        display: "flex",
        gap: 2,
        flexDirection: "column"
      }}
    >
      <Users/>
    </Layout>
  )
}

export const getServerSideProps = withAuth;