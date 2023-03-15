import PageContainer from "../page-container";
// import Header from "../header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CategoryHome from "./CategoryHome";
import DefaultLayout from "../Layout/DefaultLayout";
import Chat from "../Chat";
import Header from "../Home/Header";

export default function HomeLayout({ title, description, children }) {
  return (
    <DefaultLayout>
      <Header />
      <CategoryHome />
      <Chat />
    </DefaultLayout>
  );
}
