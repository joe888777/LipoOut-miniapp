
"use client";

import { Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";

function Navigator() {
    const router = useRouter();
    const navigatePage = (page: string) => {
        router.push(page);
    }

    return (
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link onClick={() => navigatePage("/dashboard")}>Dashboard</Navbar.Link>
          <Navbar.Link onClick={() => navigatePage("/profile")}>Profile</Navbar.Link>
          <Navbar.Link onClick={() => navigatePage("/record")}>Record</Navbar.Link>
          <Navbar.Link onClick={() => navigatePage("/register")}>Register</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }

export default Navigator;