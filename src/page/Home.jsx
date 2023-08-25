// eslint-disable-next-line no-unused-vars
import { styled } from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  const productlists = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Header />
      <main>
        <div>Slider Banner</div>
        <section>
          {productlists.map((product, index) => (
            <li key={index}>
              <div>{product}</div>
              <div>
                <h4>Product{product}</h4>
                <p>100,000원</p>
                <p>40%</p> |<p>300부</p>
              </div>
            </li>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
