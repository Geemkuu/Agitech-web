"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLoading } from '@/contexts/loading-context'
import { ReactNode } from 'react'

interface SmartLinkProps {
  href: string
  children: ReactNode
  className?: string
  loadingMessage?: string
  [key: string]: any
}

export function SmartLink({ href, children, className, loadingMessage, external, ...props }: SmartLinkProps) {
  const router = useRouter()
  const { startLoading, stopLoading } = useLoading()

  const getLoadingMessage = (href: string) => {
    if (loadingMessage) return loadingMessage

    if (href.includes('/catalogue')) {
      return "🌱 Preparing your seedling catalogue..."
    } else if (href.includes('/about')) {
      return "📖 Learning about our story..."
    } else if (href.includes('/feedback')) {
      return "💬 Setting up your feedback form..."
    } else if (href.includes('wa.me')) {
      return "📱 Connecting you to WhatsApp..."
    } else if (href.includes('tel:')) {
      return "📞 Preparing your call..."
    } else {
      return "Please wait as we fetch the freshest data..."
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    // For external links or mailto/tel, show loading briefly
    if (href.startsWith('http') && !href.includes(window.location.origin)) {
      e.preventDefault()
      startLoading(getLoadingMessage(href))
      setTimeout(() => {
        window.open(href, '_blank')
        stopLoading()
      }, 1500)
    } else if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      e.preventDefault()
      startLoading(getLoadingMessage(href))
      setTimeout(() => {
        window.location.href = href
        stopLoading()
      }, 1000)
    } else {
      // For internal links, show loading during navigation
      startLoading(getLoadingMessage(href))
      // Stop loading after navigation (will be handled by page load)
      setTimeout(() => stopLoading(), 3000)
    }
  }

  // If it's an internal Next.js link
  if (href.startsWith('/') && !href.startsWith('//')) {
    return (
      <Link
        href={href}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    )
  }

  // For external links
  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
}