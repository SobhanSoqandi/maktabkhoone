import Header from "@/app/Home/(components)/Header";
import Footer from "./(components)/Footer";

function layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default layout;
