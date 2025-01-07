import CountdownTimer from "./CountDown";

export default function Hero(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>HEKATONCHAIRAS 2025</h1>
        <CountdownTimer />
      </div>
    </section>
  );
}
