import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

interface HitokotoResponse {
  hitokoto: string
  from: string
  from_who?: string
}

export function Notification() {
  const [hitokoto, setHitokoto] = useState<HitokotoResponse | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    fetch("https://v1.hitokoto.cn/")
      .then((res) => res.json())
      .then((data: HitokotoResponse) => {
        setHitokoto(data)
        setShow(true)
      })
      .catch(() => {
        setHitokoto({ hitokoto: "生活不止眼前的苟且，还有诗和远方的田野", from: "高晓松" })
        setShow(true)
      })

    const timer = setTimeout(() => setShow(false), 8000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed top-16 left-4 z-50 w-72">
      <AnimatePresence>
        {show && hitokoto && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9, filter: "blur(8px)" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              exit: { duration: 0.5, ease: "easeInOut" }
            }}
            className="rounded-2xl border border-white/30 bg-white/70 p-4 shadow-lg backdrop-blur-md dark:bg-black/50"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-apple-gray-900 dark:text-apple-gray-100">
                  欢迎回来
                </p>
                <p className="mt-1 text-xs leading-relaxed text-apple-gray-500 dark:text-apple-gray-400">
                  「{hitokoto.hitokoto}」
                  <span className="ml-1 text-apple-gray-400 dark:text-apple-gray-500">
                    —— {hitokoto.from_who || hitokoto.from}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
