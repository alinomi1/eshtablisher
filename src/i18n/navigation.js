// your language switcher should use these instead of plain local state
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);