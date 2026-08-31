'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { QuestionMarkCircleIcon as HelpCircle } from '@heroicons/react/24/solid';

function matchesPathname(pathname, href) {
  if (!pathname || !href) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function getItemKey(item, sectionIndex, itemIndex) {
  return item.href ?? `section-${sectionIndex}-item-${itemIndex}`;
}

export default function SidebarNavContent({
  navSections = [],
  collapsed = false,
  theme = 'light',
}) {
  const pathname = usePathname();
  const [clickedKey, setClickedKey] = useState(null);

  // The route settled, so the pathname is the source of truth again.
  useEffect(() => {
    setClickedKey(null);
  }, [pathname]);

  const pathnameIsInNav = navSections.some((section) =>
    section.items.some((item) => matchesPathname(pathname, item.href))
  );

  const isItemActive = (item, key) => {
    if (clickedKey) return key === clickedKey;
    if (pathnameIsInNav) return matchesPathname(pathname, item.href);
    return Boolean(item.active);
  };

  const isDark = theme === 'dark';
  const sectionTitleClasses = isDark ? 'text-gray-400' : 'text-gray-500';
  const activeClasses = isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900';
  const idleClasses = isDark
    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900';
  const iconActiveClasses = isDark ? 'text-white' : 'text-gray-900';
  const iconIdleClasses = isDark ? 'text-gray-400' : 'text-gray-500';
  const footerBorder = isDark ? 'border-gray-800' : 'border-gray-200';
  const footerButtonClasses = isDark
    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900';

  const renderItemIcon = (item, active) => {
    const iconClasses = `h-6 w-6 transition-all duration-200 ${
      active ? iconActiveClasses : iconIdleClasses
    }`;

    if (typeof item.icon === 'string') {
      return (
        <Image
          src={item.icon}
          alt=""
          width={24}
          height={24}
          className={`pointer-events-none object-contain ${
            active ? 'opacity-100' : 'opacity-75'
          } ${iconClasses}`}
        />
      );
    }

    const Icon = item.icon;
    return <Icon className={`pointer-events-none ${iconClasses}`} />;
  };

  const itemClasses = (active) =>
    `flex w-full items-center ${
      collapsed ? 'justify-center' : 'gap-3'
    } rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      active ? activeClasses : idleClasses
    }`;

  const renderItemLabel = (item) => (
    <span
      className={`pointer-events-none min-w-0 overflow-hidden whitespace-nowrap text-left transition-all duration-200 ${
        collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
      }`}
    >
      {item.label}
    </span>
  );

  return (
    <div className={`flex h-full flex-col ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={sectionIndex === 0 ? 'mt-2' : 'mt-4'}>
            {!collapsed && section.title && (
              <h3 className={`mb-2 text-xs font-semibold uppercase tracking-wider ${sectionTitleClasses}`}>
                {section.title}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => {
                const key = getItemKey(item, sectionIndex, itemIndex);
                const active = isItemActive(item, key);

                return (
                  <li key={key}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        aria-label={item.label}
                        aria-current={active ? 'page' : undefined}
                        onClick={() => setClickedKey(key)}
                        className={itemClasses(active)}
                      >
                        {renderItemIcon(item, active)}
                        {renderItemLabel(item)}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={(event) => {
                          setClickedKey(key);
                          item.onClick?.(event);
                        }}
                        aria-label={item.label}
                        aria-current={active ? 'page' : undefined}
                        className={itemClasses(active)}
                      >
                        {renderItemIcon(item, active)}
                        {renderItemLabel(item)}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className={`border-t ${footerBorder} ${collapsed ? 'py-3' : 'px-3 py-4'}`}>
        <button
          type="button"
          className={`flex w-full items-center ${
            collapsed ? 'justify-center' : 'gap-3'
          } rounded-md px-3 py-2 text-sm transition-colors duration-200 ${footerButtonClasses}`}
        >
          <HelpCircle className={`h-6 w-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
          <span
            className={`min-w-0 overflow-hidden whitespace-nowrap text-left transition-all duration-200 ${
              collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
            }`}
          >
            Help
          </span>
        </button>
      </div>
    </div>
  );
}
