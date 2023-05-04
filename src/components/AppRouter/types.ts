import BankcardPage from '@pages/BankcardPage'
import ContactPage from '@pages/ContactPage'
import HomePage from '@pages/HomePage'
import TimelinePage from '@pages/TimelinePage'
import React from 'react'

export interface IRoute {
  path: string
  element: React.ComponentType
}

export enum AppRoutes {
  HOME = '/',
  TIMELINE = '/timeline',
  BANKCARD = '/bankcard',
  CONTACT = '/contact',
  NOT_FOUND = '*',
}

export const publicAppRoutes: IRoute[] = [
  { path: AppRoutes.HOME, element: HomePage },
  { path: AppRoutes.TIMELINE, element: TimelinePage },
  { path: AppRoutes.BANKCARD, element: BankcardPage },
  { path: AppRoutes.CONTACT, element: ContactPage },
  { path: AppRoutes.NOT_FOUND, element: HomePage },
]
