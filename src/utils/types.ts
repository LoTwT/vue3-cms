import { Ref } from "vue"

export type Nullable<T> = T | null

export type MaybeRef<T> = Ref<T> | T
