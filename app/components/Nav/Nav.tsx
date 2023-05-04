import { Form, Link, NavLink } from "@remix-run/react";
import {
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";

import type { RemixNavLinkProps } from "@remix-run/react/dist/components";
import type { User } from "@prisma/client";

function BrandNavLink({ className, children, ...rest }: RemixNavLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          className,
          "flex gap-2 p-3 uppercase transition-all hover:text-opacity-80",
          {
            "text-primary-light": !isActive,
            "text-accent-light": isActive,
          }
        )
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
}

const menuCls = "m-0 flex list-none flex-row gap-3 p-0";

const mainLinks = [
  {
    key: 1,
    to: "/",
    children: "Acasă",
    cls: "hidden lg:list-item",
    clsAlt: "lg:hidden",
  },
  {
    key: 2,
    to: "/services",
    children: "Servicii",
    cls: "hidden sm:list-item",
    clsAlt: "sm:hidden",
  },
  {
    key: 3,
    to: "/about",
    children: "Despre Noi",
    cls: "hidden sm:list-item",
    clsAlt: "sm:hidden",
  },
  {
    key: 4,
    to: "/contact",
    children: "Contactează-ne",
    cls: "hidden lg:list-item",
    clsAlt: "lg:hidden",
  },
];

export function Nav({ user }: { user?: User }) {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <nav className="top-0 flex h-20 items-center justify-between bg-darkest px-4 xs:sticky">
      <Link to="/" className="font-cursive text-2xl text-primary-light">
        Prințesa și Dragonul
      </Link>
      <menu className={menuCls}>
        {mainLinks.map((link) => (
          <li key={link.key} className={link.cls}>
            <BrandNavLink to={link.to}>{link.children}</BrandNavLink>
          </li>
        ))}
      </menu>

      {!user && (
        <menu className={clsx("hidden xl:flex", menuCls)}>
          <li>
            <BrandNavLink to="/login">
              <UserIcon width="20" /> Login
            </BrandNavLink>
          </li>
          <li>
            <BrandNavLink to="/join">
              <UserPlusIcon width="20" /> Cont nou
            </BrandNavLink>
          </li>
          {user && (
            <li>
              <Form action="/logout" method="POST">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-3 uppercase text-primary-light hover:text-primary"
                >
                  <ArrowLeftOnRectangleIcon width="20" />
                  Logout
                </button>
              </Form>
            </li>
          )}
        </menu>
      )}

      <div className="group relative flex items-center xl:hidden">
        <button
          onClick={() => setIsMenuShown((isShown) => !isShown)}
          title="Display menu"
          type="button"
          className="ml-10 py-6 text-primary-light transition-all hover:text-opacity-80"
        >
          <Bars3Icon className="lg:hidden" width={40} />
          <UserIcon className="hidden lg:inline" width={30} />
        </button>

        <menu
          className={clsx(
            "absolute right-0 top-16 -mr-4 flex w-screen flex-col overflow-hidden bg-darkest transition-all group-hover:h-auto group-hover:opacity-100 sm:w-64",
            { "h-0 opacity-0": !isMenuShown, "h-auto opacity-100": isMenuShown }
          )}
        >
          {mainLinks.map((link) => (
            <li key={link.key} className={link.clsAlt}>
              <BrandNavLink className="justify-center" to={link.to}>
                {link.children}
              </BrandNavLink>
            </li>
          ))}

          <li className="flex justify-center p-3 lg:hidden">
            <hr className="w-20 border-dashed border-primary-light" />
          </li>
          {!user && (
            <>
              <li>
                <BrandNavLink className="justify-center" to="/login">
                  Login
                </BrandNavLink>
              </li>
              <li>
                <BrandNavLink className="justify-center" to="/join">
                  Cont nou
                </BrandNavLink>
              </li>
            </>
          )}
          {user && (
            <li>
              <Form action="/logout" method="POST">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 py-4 uppercase text-primary-light hover:text-primary"
                >
                  Logout
                </button>
              </Form>
            </li>
          )}
        </menu>
      </div>
    </nav>
  );
}
