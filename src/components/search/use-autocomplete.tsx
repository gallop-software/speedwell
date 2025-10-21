import { useCallback, useId, useRef, useState } from 'react'
import {
  type AutocompleteApi,
  type AutocompleteState,
  createAutocomplete,
} from '@algolia/autocomplete-core'
import { useRouter } from 'next/navigation'

import { type Result, search } from './search-client'

type EmptyObject = Record<string, never>

type Autocomplete = AutocompleteApi<
  Result,
  React.SyntheticEvent,
  React.MouseEvent,
  React.KeyboardEvent
>

export function useAutocomplete({
  onClose,
}: {
  onClose: (ac: Autocomplete) => void
}) {
  const id = useId()
  const router = useRouter()
  const [autocompleteState, setAutocompleteState] = useState<
    AutocompleteState<Result> | EmptyObject
  >({})

  const autocompleteRef = useRef<Autocomplete | null>(null)

  const navigate = useCallback(
    ({ itemUrl }: { itemUrl?: string }) => {
      if (!itemUrl) return
      router.push(itemUrl)

      // if navigating to same URL, still close
      if (
        itemUrl ===
        window.location.pathname + window.location.search + window.location.hash
      ) {
        if (autocompleteRef.current) {
          onClose(autocompleteRef.current)
        }
      }
    },
    [router, onClose]
  )

  const [autocomplete] = useState<Autocomplete>(() =>
    createAutocomplete<
      Result,
      React.SyntheticEvent,
      React.MouseEvent,
      React.KeyboardEvent
    >({
      id,
      placeholder: 'Search...',
      defaultActiveItemId: 0,
      onStateChange({ state }) {
        setAutocompleteState(state)
      },
      shouldPanelOpen({ state }) {
        return state.query.trim() !== ''
      },
      navigator: { navigate },
      getSources({ query }) {
        return Promise.resolve([
          {
            sourceId: 'mdx',
            getItems() {
              if (!query) return []
              return search(query, { limit: 20 })
            },
            getItemUrl({ item }) {
              return item.url
            },
            onSelect: navigate,
          },
        ])
      },
    })
  )

  autocompleteRef.current = autocomplete

  return { autocomplete, autocompleteState }
}
