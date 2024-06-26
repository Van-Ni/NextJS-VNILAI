import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import "./navbar.css"
import { MobileSidebar } from "./mobile-sidebar";
import { FormPopover } from "@/components/form/form-popover";
export const Navbar = () => (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
        <MobileSidebar />
        <div className="flex items-center gap-x-4">
            <div className="hidden md:flex">
                <Logo />
            </div>
            <FormPopover sideOffset={10} side="bottom" align="start">
                <Button variant="primary" size="sm" className="rounded-sm hidden md:block h-auto  py-1.5 px-2">
                    Create
                </Button>
            </FormPopover>
            <FormPopover sideOffset={10} side="bottom" align="start">
                <Button variant="primary" size="sm" className="rounded-sm block md:hidden">
                    <Plus className="h-4 w-4" />
                </Button>
            </FormPopover>
        </div>
        <div className="ml-auto flex items-center gap-x-2">
            <OrganizationSwitcher
                afterCreateOrganizationUrl="/organization/:id"
                afterLeaveOrganizationUrl="/select-org"
                afterSelectOrganizationUrl="/organization/:id"
                appearance={{
                    elements: {
                        rootBox: {
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                    },
                }}
            />
            <UserButton
                afterSignOutUrl={`${process.env.NEXT_PUBLIC_APP_URL}`}
                appearance={{
                    elements: {
                        avatarBox: {
                            height: 30,
                            width: 30,
                        }
                    }
                }}
            />
        </div>
    </nav>
)