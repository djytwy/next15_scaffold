import React, { useEffect, useState } from 'react'
import { cn } from '@/utils'

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  const [show, setShow] = useState(open)

  useEffect(() => {
    if (open) {
      setShow(true)
    }
    else {
      // 动画结束后再卸载
      const timer = setTimeout(() => setShow(false), 200)
      return () => clearTimeout(timer)
    }
  }, [open])

  if (!show) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        className={`bg-gray-500 rounded p-6 relative transform transition-all duration-200 ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  )
}
