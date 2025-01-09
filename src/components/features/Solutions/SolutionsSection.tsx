import { Solution } from "../../../interfaces/models/Solutions";

export default function SolutionsSection(items: Solution[]): JSX.Element {
  return (
    <section className="flex flex-wrap justify-center">
      {items.map(
        (solution: Solution): JSX.Element => (
          <div
            key={solution.id}
            className="text-white w-52 font-grotesk mx-6 mb-8"
          >
            <h3 className="font-semibold">{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        )
      )}
    </section>
  );
}
