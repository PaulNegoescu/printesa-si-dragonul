import type { V2_MetaFunction } from "@remix-run/node";
import logo from "./PrintesaSiDragonul.webp";
import styles from "./styles.css";

export const meta: V2_MetaFunction = () => [{ title: "Prințesa și Dragonul" }];
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function Index() {
  return (
    <>
      <section className="splash">
        <img src={logo} alt="Prințesa și Dragonul Logo" />
      </section>
    </>
  );
}
