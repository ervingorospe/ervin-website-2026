"use client";

import Paper from "@/components/Paper";
import Button from "@/components/Button";
import Logo from "@/components/layout/Logo";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
  return (
    <header className="fixed w-full top-5 z-100">
      <Paper className="max-w-5xl mx-auto px-6 py-2 rounded-4xl">
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation />
          <Button
            link="#contact"
            firstText={
              <>
                Contact
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                  >
                    <path
                      d="M13.7721 5.70592C14.076 5.31548 14.076 4.6814 13.7721 4.29096L10.6609 0.292831C10.357 -0.0976105 9.86362 -0.0976105 9.55979 0.292831C9.25596 0.683273 9.25596 1.31735 9.55979 1.70779L11.3439 4.00047H0.777812C0.347585 4.00047 0 4.44713 0 5C0 5.55287 0.347585 5.99953 0.777812 5.99953H11.3439L9.55979 8.29221C9.25596 8.68265 9.25596 9.31673 9.55979 9.70717C9.86362 10.0976 10.357 10.0976 10.6609 9.70717L13.7721 5.70904V5.70592Z"
                      fill="#4F8CFF"
                    />
                  </svg>
                </span>
              </>
            }
            secondText={
              <>
                Let’s go
                <span>😊</span>
              </>
            }
          />
        </div>
      </Paper>
    </header>
  );
}
