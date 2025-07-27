import type { RefObject } from 'react'
import { create } from 'zustand'

interface GlobalState {
  showModal: boolean
  setShowModal: (isShow: boolean) => void
  cropperedImgList: Array<any>
  setCropperedImgList: (list: Array<any>) => void
  editImage: string | ArrayBuffer | null | undefined
  setEditImage: (editImage: string | ArrayBuffer | null | undefined) => void
  cropperedImage: string | null | undefined
  setCropperedImage: (cropperedImage: string | null | undefined) => void
  inputRef: RefObject<HTMLInputElement> | null
  setInputRef: (ref: RefObject<HTMLInputElement> | null) => void
}

export const useGlobalStore = create<GlobalState>((set) => ({
  showModal: false,
  setShowModal: (isShow) => set({ showModal: isShow }),
  cropperedImgList: [],
  setCropperedImgList: (list) => set({ cropperedImgList: list }),
  editImage: '',
  setEditImage: (image) => set({ editImage: image }),
  cropperedImage: '',
  setCropperedImage: (image) => set({ cropperedImage: image }),
  inputRef: null,
  setInputRef: (ref) => set({ inputRef: ref }),
}))
