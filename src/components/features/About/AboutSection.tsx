export default function About(): JSX.Element {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col space-y-6 text-white text-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>

        <div className="w-full h-[2px] bg-white"></div>

        <div className="flex justify-center">
          <img
            src="./images/profile.jpg"
            alt="Placeholder"
            className="w-full h-fit rounded-xl object-cover "
          />
        </div>

        <p>
          <strong>Vieta:</strong> Adreso g. 123
        </p>
        <p>
          <strong>Data:</strong> 0000.00.00
        </p>
      </div>

      <div className="relative">
        <img
          src="./images/profile.jpg"
          alt="Right Image"
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
