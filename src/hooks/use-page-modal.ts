import { ref } from "vue"
import PageModal from "@/components/page-modal/index"

export const usePageModal = () => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    if (pageModalRef.value) {
      pageModalRef.value.dislogVisible = true
    }
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dislogVisible = true
    }
  }

  return { pageModalRef, defaultInfo, handleNewData, handleEditData }
}
