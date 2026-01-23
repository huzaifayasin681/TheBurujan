import { handlers } from "@/auth"

// Force this route to be dynamic (not pre-rendered)
export const dynamic = 'force-dynamic'

export const { GET, POST } = handlers
