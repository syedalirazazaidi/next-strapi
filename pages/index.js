import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ restaurants }) {
  return <div className="container">this home page</div>;
}
export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/restaurants`);
  const data = await res.json();
  return {
    props: {
      restaurants: data,
    },
  };
}
