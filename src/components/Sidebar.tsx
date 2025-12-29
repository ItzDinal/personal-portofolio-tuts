/**
 * Node Modules
 */
import { useState } from "react";

/**
 *  Components
 */
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/**
 * Assets
 */
import { MenuIcon } from "lucide-react";

/**
 * Constants
 */

import { navLinks, socialLinks } from "@/constants";
export const Sidebar = () => {
    const[active, setActive] = useState('#hero');
    return (
        <>
        <Sheet>
            <SheetTrigger asChild>
                <Button>
                    <MenuIcon />
                </Button>
            </SheetTrigger>
        </Sheet>
        </>
    );
}