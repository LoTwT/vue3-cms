import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

// dayjs 扩展 utc
dayjs.extend(utc)

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss"

export const formatUtcTime = (
  utcTime: string,
  format: string = DATE_TIME_FORMAT,
) => dayjs.utc(utcTime).format(format)
