import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
  resolve: name => import(`./Pages/${name}.jsx`),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
})
InertiaProgress.init({
  delay: 250,
  color: '#FF2E2E',
  includeCSS: true,
  showSpinner: true,
})