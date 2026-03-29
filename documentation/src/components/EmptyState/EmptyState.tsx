import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import styles from './EmptyState.module.css';

export type EmptyStateSize = 'sm' | 'md' | 'lg';

export interface EmptyStateAction {
  label: string;
  onClick?: () => void;
  href?: string;
  /** Defaults to 'primary' for the first action, 'secondary' for the rest */
  variant?: 'primary' | 'secondary' | 'ghost';
}

export interface EmptyStateProps {
  /** Emoji, SVG, or any React node rendered in the icon circle */
  icon?: ReactNode;
  /** Short, descriptive heading */
  title: string;
  /** Supporting body copy — explain why and what to do next */
  body?: ReactNode;
  /** One or more CTA buttons */
  actions?: EmptyStateAction[];
  /** Size variant */
  size?: EmptyStateSize;
  /** Extra class for the wrapper */
  className?: string;
}

/**
 * EmptyState
 * ----------
 * Reusable empty-state pattern for docs, search, and pattern flows.
 * Renders: icon → title → body → CTA(s)
 *
 * Usage:
 *   <EmptyState
 *     icon="🔍"
 *     title="No results found"
 *     body="Try a different search term or browse all patterns."
 *     actions={[{ label: 'Browse patterns', href: '/docs/patterns/overview' }]}
 *   />
 */
export default function EmptyState({
  icon,
  title,
  body,
  actions = [],
  size = 'md',
  className,
}: EmptyStateProps) {
  const sizeClass = size === 'sm' ? styles.sizeSm : size === 'lg' ? styles.sizeLg : undefined;

  return (
    <div className={clsx(styles.emptyState, sizeClass, className)} role="status" aria-label={title}>
      {icon && (
        <div className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {body && <p className={styles.body}>{body}</p>}
      </div>

      {actions.length > 0 && (
        <div className={styles.actions}>
          {actions.map((action, i) => {
            const variant = action.variant ?? (i === 0 ? 'primary' : 'secondary');
            const btnClass = clsx(
              'button',
              `button--${variant === 'ghost' ? 'link' : variant}`,
              size === 'sm' ? 'button--sm' : size === 'lg' ? 'button--lg' : undefined,
            );

            if (action.href) {
              return (
                <a key={i} href={action.href} className={btnClass}>
                  {action.label}
                </a>
              );
            }

            return (
              <button key={i} type="button" className={btnClass} onClick={action.onClick}>
                {action.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
