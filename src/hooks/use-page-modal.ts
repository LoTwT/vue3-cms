import { ref } from "vue"
import PageModal from "@/components/page-modal/index"

type CallbackFn = () => void

export const usePageModal = (
  createCallback?: CallbackFn,
  editCallback?: CallbackFn,
) => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dislogVisible = true
    }

    createCallback && createCallback()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dislogVisible = true
    }

    editCallback && editCallback()
  }

  return { pageModalRef, defaultInfo, handleNewData, handleEditData }
}
