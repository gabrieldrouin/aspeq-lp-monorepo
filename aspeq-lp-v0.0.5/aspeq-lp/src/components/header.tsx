import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="text-4xl font-extrabold lg:text-5xl">ASPEQ</div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
