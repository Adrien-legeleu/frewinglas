import Image from "next/image";
import Img from "@/public/logo/logo-frewinglas.png";
import { ReviewResponsive } from "./ReviewResponsive";

export default function Review() {
  return (
    <>
      <ReviewResponsive />
      <ul
        className="flex h-full max-lg:hidden  gap-5 p-4 items-start"
        style={{ scrollbarWidth: "none" }}
      >
        {reviewList.map((review, index) => {
          return (
            <li key={index}>
              <div className="flex flex-col gap-2 h-44 dark:text-white max-w-md w-full bg-background brightness-[85%] p-6 rounded-3xl shadow-md hover:scale-105 hover:duration-150 duration-150">
                <div className="flex flex-row justify-between w-full relative">
                  <div className="flex flex-row justify-between w-full">
                    <div>{review.name}</div>
                    <Image
                      src={review.image}
                      alt="frewinglas"
                      width={30}
                      height={30}
                      className="h-10 absolute top-0 right-0 w-10 rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="text-xs">
                    <div className="flex flex-row">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="h-4 w-4 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <div>{review.review}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

const reviewList = [
  {
    name: "Florent Ghizzoni - Ikovaline",
    review:
      "Entreprise sérieuse, avec des produits de qualité. Je recommande vivement.",
    image: Img,
  },
  {
    name: "Julie Duboi",
    review:
      "Les solutions de Frewinglas offrent un équilibre parfait entre design et fonctionnalité. Une excellente expérience !",
    image: Img,
  },
  {
    name: "Marc Leroy",
    review:
      "Le service client est impeccable et les produits sont d'une qualité exceptionnelle.",
    image: Img,
  },
];
