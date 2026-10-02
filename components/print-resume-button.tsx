"use client";

import { Printer } from "lucide-react";

export function PrintResumeButton() {
  return (
    <button onClick={() => window.print()} className="button button-primary">
      <Printer size={16} /> Print / save PDF
    </button>
  );
}
