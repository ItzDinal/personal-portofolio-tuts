/**
 * @license Apache-2.0
 */

/**
 *  Node modules
 */
import { useEffect } from "react";

/**
 * Components
 */

import { Hero } from "@/components/Hero";
export const App = () => {
  return (
    <main className="flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl">
      <Hero />
    </main>
  )
}