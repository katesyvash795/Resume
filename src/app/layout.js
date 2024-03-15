import styles from "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={styles.className}>{children}</body>
    </html>
  );
}