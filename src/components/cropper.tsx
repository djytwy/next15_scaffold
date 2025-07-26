'use client'
import { useRef } from 'react'
import Cropper from 'react-cropper'
import { useGlobalStore } from '@/app/globalCtx'
import './cropper.css'

export default function ImageCropper({ src }: { src: string }) {
  const cropperRef = useRef<any>(null)
  const { setCropperedImage } = useGlobalStore()

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper
    if (cropper) {
      // new cropper image:
      // console.log(cropper.getCroppedCanvas().toDataURL())
      setCropperedImage(cropper.getCroppedCanvas().toDataURL())
      // onCropComplete(cropper.getCroppedCanvas().toDataURL());
    }
  }

  return (
    <Cropper
      src={src}
      ref={cropperRef}
      initialAspectRatio={1}
      guides={true}
      crop={handleCrop}
      viewMode={1}
      autoCropArea={1}
      dragMode="move"
      movable
      scalable
      zoomable
      rotatable
      cropBoxResizable
      cropBoxMovable
    />
  )
}
