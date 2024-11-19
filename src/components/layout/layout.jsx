export const Layout = ({ children }) => {
  return (
    <>
      <header style={{ marginTop: "15px" }}>Header</header>
      {children}
      <footer>Footer</footer>
    </>
  );
};
