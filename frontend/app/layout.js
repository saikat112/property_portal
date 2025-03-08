export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h2>Navbar</h2>
        </nav>
        <main>{children}</main>
        <footer>
          <p>© 2025 Property Portal</p>
        </footer>
      </body>
    </html>
  );
}
