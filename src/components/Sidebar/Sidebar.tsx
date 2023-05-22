import Link from "next/link";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_top}>
        Sidebar
        <Link href={"/"}>Overview</Link>
        <Link href={"/"}>Transactions</Link>
        <Link href={"/"}>Wallets</Link>
        <Link href={"/"}>Planning</Link>
        <Link href={"/"}>Statistics</Link>
      </div>

      <Link href={"/"}>Settings</Link>
    </aside>
  );
}
