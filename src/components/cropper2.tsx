'use client'
import { useState } from 'react'
import Cropper from 'react-easy-crop'
import { getCroppedImg } from '@/utils'
import { Button } from './button'

export default function MyCropper({ imageSrc }: { imageSrc: string }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null)
  const [croppedImg, setCroppedImg] = useState<string | null>(null)

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const handleSave = async () => {
    if (!imageSrc || !croppedAreaPixels) {
      return
    }
    const cropped = await getCroppedImg(imageSrc, croppedAreaPixels)
    setCroppedImg(cropped)
  }

  return (
    <div>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
      <Button className="absolute bottom-0" onClick={handleSave}>保存裁剪结果</Button>
      {croppedImg && (
        <div>
          <img src={croppedImg} alt="裁剪结果" />
        </div>
      )}
    </div>
  )
}
