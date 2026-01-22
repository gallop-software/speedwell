'use client'

import {
    Children,
    isValidElement,
    cloneElement,
    type ReactNode,
    type ReactElement,
} from 'react'

interface FilterableProps {
    'data-filter-category'?: string
    children?: ReactNode
    [key: string]: unknown
}
import { proxy, useSnapshot } from 'valtio'

// Shared state using valtio
const filterState = proxy({ activeFilter: 'ALL' })

interface FilterNavProps {
    categories: string[]
    className?: string
}

export function FilterNav({ categories, className }: FilterNavProps) {
    const snap = useSnapshot(filterState)

    return (
        <div
            className={
                className || 'flex justify-center gap-4 md:gap-8 mb-12 flex-wrap'
            }
        >
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => {
                        filterState.activeFilter = category
                    }}
                    className={`text-sm uppercase tracking-wider transition-colors ${snap.activeFilter === category
                        ? 'text-accent font-semibold'
                        : 'text-body-contrast/60 hover:text-body-contrast'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

interface FilterWrapperProps {
    children: ReactNode
    className?: string
}

export function FilterWrapper({ children, className }: FilterWrapperProps) {
    const snap = useSnapshot(filterState)

    // Recursively process children to filter items with data-filter-category
    const processChildren = (nodes: ReactNode): ReactNode => {
        return Children.map(nodes, (child) => {
            if (!isValidElement(child)) return child

            const element = child as ReactElement<FilterableProps>
            const props = element.props

            // Check if this element has a data-filter-category
            const category = props['data-filter-category']
            if (category) {
                // This is a filterable item
                if (snap.activeFilter !== 'ALL' && snap.activeFilter !== category) {
                    return null
                }
                return child
            }

            // If has children, process them recursively
            if (props.children) {
                return cloneElement(
                    element,
                    props,
                    processChildren(props.children)
                )
            }

            return child
        })
    }

    return <div className={className}>{processChildren(children)}</div>
}
