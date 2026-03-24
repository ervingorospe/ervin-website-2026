import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <p className="text-5xl font-bold mb-8">Oops! Are you lost?</p>
        <Button
          defaultClass="bg-primary"
          hoverClass="bg-[#3A73E6]"
          padding="px-8 py-3"
          link="/"
          firstText={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="text-foreground h-4 w-auto"
              >
                <path
                  fill="currentColor"
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 544 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-434.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
                />
              </svg>
              Go Back
            </>
          }
          secondText={
            <>
              Home
              <span>🏠</span>
            </>
          }
        />
      </div>
    </div>
  );
}
