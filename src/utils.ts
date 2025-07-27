import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function getCroppedImg(
  imageSrc: string,
  pixelCrop: { x: number, y: number, width: number, height: number },
): Promise<string> {
  // 创建图片对象
  const image = new window.Image()
  image.src = imageSrc
  // 等待图片加载完成
  await new Promise((resolve) => {
    image.onload = resolve
  })

  // 创建 canvas
  const canvas = document.createElement('canvas')
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height
  const ctx = canvas.getContext('2d')!

  // 绘制裁剪区域
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height, // 源图像的裁剪区域
    0,
    0,
    pixelCrop.width,
    pixelCrop.height, // 画到 canvas 的位置和大小
  )

  // 导出为 base64
  return canvas.toDataURL('image/jpeg')
}
