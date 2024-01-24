import { BsEmojiGrimaceFill } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <div className="w-full flex flex-col gap-7 items-center justify-center mt-32">
          <h1 className="text-6xl text-[#183153]">
            <BsEmojiGrimaceFill />
          </h1>
          <h2 className="text-4xl text-[#183153] font-bold">No Icons Found</h2>
        </div>
        <p className="text-center mt-3 text-xl w-3/4 mx-auto">
          There are no icons that match your current filters. Try removing some
          of them to get better results.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
