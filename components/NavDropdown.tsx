"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type NavDropdownItem = {
  label: string;
  href: string;
  nested?: boolean;
};

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  active: boolean;
  menuOnly?: boolean;
};

export default function NavDropdown({ label, href, items, active, menuOnly = false }: NavDropdownProps) {
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuStyle, setMenuStyle] = useState<{ top: number; left: number; minWidth: number }>({
    top: 0,
    left: 0,
    minWidth: 280,
  });
  const triggerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    setMenuStyle({
      top: rect.bottom,
      left: rect.left,
      minWidth: Math.max(rect.width, 280),
    });
  }, []);

  const showMenu = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    updatePosition();
    setOpen(true);
  }, [updatePosition]);

  const hideMenu = useCallback(() => {
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 120);
  }, []);

  const closeMenu = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (document.getElementById(menuId)?.contains(target)) return;
      closeMenu();
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenu();
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeMenu, menuId, open]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const menu =
    mounted && open ? (
      <div
        id={menuId}
        className="fixed z-[200]"
        style={{
          top: menuStyle.top,
          left: menuStyle.left,
          minWidth: menuStyle.minWidth,
        }}
        onMouseEnter={showMenu}
        onMouseLeave={hideMenu}
      >
        <div
          className="border border-white/70 bg-[rgba(241,245,249,0.92)] shadow-[0_18px_48px_rgba(15,23,42,0.22)] backdrop-blur-xl"
          role="menu"
          aria-label={`${label} submenu`}
        >
          {items.map((item) => (
            <Link
              key={`${item.href}::${item.label}`}
              href={item.href}
              role="menuitem"
              className={`block py-2.5 text-[13px] font-semibold leading-snug text-slate-800 transition hover:bg-[rgba(11,95,255,0.08)] hover:text-[#0B5FFF] ${
                item.nested ? "px-4 pl-8 text-[12px] font-medium text-slate-600" : "px-4"
              }`}
              onClick={() => {
                window.setTimeout(closeMenu, 0);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    ) : null;

  const triggerClassName = `inline-flex items-center gap-1.5 px-4 py-3 text-xs font-bold uppercase tracking-[0.06em] transition lg:px-5 lg:text-[13px] ${
    active || open
      ? "bg-white/20 text-[#86efac] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
      : "text-white/95 hover:bg-white/10 hover:text-[#86efac]"
  }`;

  const triggerArrow = (
    <span className={`text-[9px] transition ${open ? "text-[#86efac]" : "text-white/70"}`}>▼</span>
  );

  return (
    <>
      <div
        ref={triggerRef}
        className="relative"
        onMouseEnter={showMenu}
        onMouseLeave={hideMenu}
      >
        {menuOnly ? (
          <button
            type="button"
            className={triggerClassName}
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => (open ? closeMenu() : showMenu())}
          >
            {label}
            {triggerArrow}
          </button>
        ) : (
          <Link
            href={href}
            className={triggerClassName}
            aria-haspopup="true"
            aria-expanded={open}
          >
            {label}
            {triggerArrow}
          </Link>
        )}
      </div>

      {mounted && menu ? createPortal(menu, document.body) : null}
    </>
  );
}
