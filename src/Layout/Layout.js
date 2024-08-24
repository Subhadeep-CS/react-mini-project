import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div id="body">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
