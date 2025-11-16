import { WHATSAPP, WHATSAPP_MSG } from "./constants"

export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || WHATSAPP_MSG
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
}

export function sendWhatsAppMessage(customMessage?: string): void {
  const message = customMessage || WHATSAPP_MSG
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank")
}
