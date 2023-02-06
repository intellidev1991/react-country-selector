import React from 'react'
import { createTheme, defaultSideNavs } from 'vite-pages-theme-doc'

import Component404 from './404'

import './app.css'

export default createTheme({
  logo: <div className="text-3xl font-bold">📘 CountrySelector Document</div>,
  topNavs: [
    {
      label: 'Index',
      path: '/',
      activeIfMatch: {
        // match all first-level paths
        path: '/:foo',
        exact: true,
      },
    },
    {
      label: 'Components',
      path: '/components/CountrySelector',
      activeIfMatch: '/components',
    },
  ],
  sideNavs: (ctx) => {
    return defaultSideNavs(ctx, {
      groupConfig: {
        components: {
          general: {
            label: 'General',
            order: 1,
          },
        },
      },
    })
  },
  Component404,
  footer: (ctx) => {
    return {
      theme: 'light',
      copyright: 'Made with ❤️ by Intellidev',
      message:
        "This is a footer message. You can use it to display some information about your site. It's optional.",
    }
  },
})
