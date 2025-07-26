'use client'
import { Button } from '@/components/button'
import Camera from '@/components/camera'
import Cropper from '@/components/cropper'
import Modal from '@/components/modal'
import { cn } from '@/utils'
import { useGlobalStore } from './globalCtx'


const CropperedItem = ({ imageSrc }: { imageSrc: string }) => {
  const { setCropperedImgList, cropperedImgList } = useGlobalStore()

  return (
    <div className="w-[84px] h-[120px] bg-[#afafaf] relative rounded-md">
      <span
        className="icon-[akar-icons--circle-x-fill] text-black w-5 h-5 absolute -left-2 -top-2"
        onClick={() => {
          debugger
          const _newCropperedImgList = cropperedImgList.filter(e => e !== imageSrc)
          setCropperedImgList(_newCropperedImgList)
        }}
      >
      </span>
      <img className="object-contain absolute inset-0 w-full h-full" src={imageSrc}></img>
    </div>
  )
}

export default function Home() {
  const { editImage, setEditImage, cropperedImage, setCropperedImage, inputRef, setCropperedImgList, cropperedImgList } = useGlobalStore()
  return (
    <div className="p-4">
      <div className={cn('p-4 border-2 rounded-3xl h-[240px] border-gray-300 overflow-auto flex flex-wrap gap-x-2 gap-y-4 bg-sky-400', cropperedImgList.length > 2
        ? 'justify-between'
        : 'justify-around')}
      >
        {cropperedImgList.map((e, key) => (<CropperedItem imageSrc={e} key={`image-${key}`} />))}
      </div>
      <Camera />
      <Modal
        open={!!editImage}
        onClose={() => {
          setEditImage(undefined)
          setCropperedImage(undefined)
          if (inputRef?.current) {
            inputRef.current.value = ''
          }
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <Cropper src={editImage?.toString() ?? ''} />
          <Button
            className="mt-5"
            onClick={() => {
              setCropperedImgList([...cropperedImgList, cropperedImage])
              setEditImage(undefined)
              setCropperedImage(undefined)
              if (inputRef?.current) {
                inputRef.current.value = ''
              }
            }}
          >
            SAVE
          </Button>
        </div>
      </Modal>
    </div>
  )
}
