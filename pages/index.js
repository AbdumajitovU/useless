import axios from "axios";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

export default function Index({ data }) {
  return (
    <section>
      <h1>Stadionlar</h1>
      {data.length > 0 &&
        data.map((p, index) => {
          return <p key={index}>{p.title}</p>;
        })}
    </section>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
