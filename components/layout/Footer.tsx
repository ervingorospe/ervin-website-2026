"use client";

import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-primary">
      <div className="app-container py-8">
        <div className="flex item-center justify-between">
          <div>
            <Logo />
            <div className="font-bold">Full-Stack Developer</div>
          </div>
          <Navigation />
        </div>
        <p className="mt-10">
          © {year} All rights reserved. Built with passion and code.
        </p>
      </div>
    </footer>
  );
}
