'use client'
import { useEffect, useRef } from 'react'
import { useGlobalStore } from '../app/globalCtx'

export default function Camera() {
  const { setEditImage, setInputRef } = useGlobalStore()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // @ts-ignore
    setInputRef(inputRef)
  }, [setInputRef])

  const handleFileChange = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        console.log(event?.target?.result)
        console.log('load image finish !')
        setEditImage(event?.target?.result) // 显示图片
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="mt-4 flex justify-center">
      {/* 隐藏原生 input */}
      <input
        ref={inputRef}
        id="fileInput"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {/* 自定义按钮 */}
      <label
        htmlFor="fileInput"
        style={{
          display: 'inline-block',
          padding: '8px 16px',
          background: '#0070f3',
          color: '#fff',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Camera
      </label>
    </div>
  )
}
