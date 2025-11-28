"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Layout, TrendingUp, Palette, Users, MousePointerClick } from "lucide-react"
import { CTAButton } from "./cta-button"
import { AGENCIA } from "@/lib/constants"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/#servicos", label: "Soluções" },
    { href: "/#planos", label: "Planos" },
    { href: "/#faq", label: "FAQ" },
  ]

  const dropdownItems = [
    { label: "Sites One-Page", href: "/#servicos", icon: Layout, desc: "Alta conversão" },
    { label: "Tráfego Pago", href: "/#work-process", icon: TrendingUp, desc: "Ads que vendem" },
    { label: "Consultoria", href: "/#planos", icon: Users, desc: "Estratégia digital" },
    { label: "Não Clique Aqui", href: "/#surpresa", icon: MousePointerClick, desc: "Surpresa especial" }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-xl border-b border-gray-800 shadow-lg" : ""
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a href="/" className="text-xl md:text-2xl font-bold text-white z-50" whileHover={{ scale: 1.05 }}>
            Elev<span className="text-lime-500">.</span>
          </motion.a>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link, i) => {
              if (link.label === "Soluções") {
                return (
                  <div key={link.href} className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                    <button
                      className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 py-2 group-hover:text-lime-400"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-lime-400" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-64 p-2 bg-gray-900/95 backdrop-blur-2xl border border-gray-800/50 rounded-2xl shadow-[0_0_50px_-12px_rgba(132,204,22,0.3)] overflow-hidden"
                        >
                          <div className="flex flex-col gap-1">
                            {dropdownItems.map((item, index) => (
                              <motion.a
                                key={item.href}
                                href={item.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group/item"
                              >
                                <div className="w-8 h-8 rounded-lg bg-lime-500/10 flex items-center justify-center group-hover/item:bg-lime-500/20 transition-colors">
                                  <item.icon className="w-4 h-4 text-lime-400" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
                                    {item.label}
                                  </div>
                                  <div className="text-xs text-gray-500 group-hover/item:text-gray-400">
                                    {item.desc}
                                  </div>
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )
            })}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <CTAButton size="sm" />
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl md:hidden flex flex-col pt-24 px-6 pb-8"
            >
              <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => {
                  if (link.label === "Soluções") {
                    return (
                      <div key={link.href} className="flex flex-col gap-4 border-b border-white/5 pb-4">
                        <div className="text-2xl font-bold text-gray-300">{link.label}</div>
                        <div className="grid grid-cols-1 gap-2 pl-2">
                          {dropdownItems.map((item, idx) => (
                            <motion.a
                              key={item.href}
                              href={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + idx * 0.05 }}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                            >
                              <div className="w-10 h-10 rounded-lg bg-lime-500/10 flex items-center justify-center flex-shrink-0">
                                <item.icon size={20} className="text-lime-400" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-base font-medium text-gray-200">{item.label}</span>
                                <span className="text-xs text-gray-500">{item.desc}</span>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    )
                  }

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold text-gray-300 hover:text-white transition-colors flex items-center justify-between group border-b border-white/5 pb-4"
                    >
                      {link.label}
                      <motion.span
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        →
                      </motion.span>
                    </motion.a>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <CTAButton size="lg" className="w-full text-lg py-6 shadow-lg shadow-lime-500/20" />
                <p className="text-center text-gray-500 text-sm mt-6">
                  © {new Date().getFullYear()} {AGENCIA}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
