import Radio from "@/UI/Radio";
import Youtube from "@/UI/Youtube";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-10 mx-auto max-w-lg">
        <Radio />
      </div>
      <div className="flex justify-center items-center mt-10">
        <Youtube embedId={"B91wc5dCEBA"} />
      </div>
    </div>
  );
}
