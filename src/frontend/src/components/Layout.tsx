import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-smooth">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <footer className="w-full border-t border-border bg-card py-4 mt-auto">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()}. Built with love in{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-smooth"
            >
              India🇮🇳
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
