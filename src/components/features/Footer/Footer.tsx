export default function Footer(): JSX.Element {
  return (
    <footer className="w-full relative flex flex-col md:flex-row py-10 px-6 bg-[#171c1a]">
      <img
    src={"./images/3 galvos.svg"}
    alt={"Partneriai"}
    className="absolute top-[-10%] md:top-[-20%] left-1/2 transform -translate-x-1/2  h-14 md:h-20 w-auto object-cover"
  />
      <div className="flex-[0.7] w-full md:w-auto">
        <p className="font-bold text-white">Partneriai</p>
        <div className="flex flex-wrap space-x-6 mt-4">
          <a href="">
            <img
              src={"./images/partneriai-19.webp"}
              alt={"Partneriai"}
              className="h-8 w-auto my-2 object-cover"
            />
          </a>
          <a href="">
            <img
              src={"./images/partneriai-20.webp"}
              alt={"Partneriai"}
              className="h-8 w-auto my-2 object-cover"
            />
          </a>
          <a href="">
            <img
              src={"./images/partneriai-21.webp"}
              alt={"Partneriai"}
              className="h-8 w-auto my-2 object-cover"
            />
          </a>
          <a href="">
            <img
              src={"./images/partneriai-22.webp"}
              alt={"Partneriai"}
              className="h-8 w-auto my-2 object-cover"
            />
          </a>
        </div>
      </div>

      <div className="flex-[0.3] w-full md:w-auto flex flex-col md:items-end items-center p-4">
        <div className="flex space-x-4">
          <a href="">
            <img
              src={"./images/soc med-24.webp"}
              alt={"Social Media"}
              className="h-5 w-auto object-cover"
            />
          </a>
          <a href="">
            <img
              src={"./images/soc med-25.webp"}
              alt={"Social Media"}
              className="h-5 w-auto object-cover"
            />
          </a>
          <a href="">
            <img
              src={"./images/soc med-26.webp"}
              alt={"Social Media"}
              className="h-5 w-auto object-cover"
            />
          </a>
          <a href="">
            <img
              src={"./images/soc med-27.webp"}
              alt={"Social Media"}
              className="h-5 w-auto object-cover"
            />
          </a>
        </div>
        <p className="text-white text-sm mt-4 text-center md:text-right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </footer>
  );
}
