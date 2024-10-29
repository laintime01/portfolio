// src/components/layout/header.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/works" },
    { name: "Resume", href: "/resume" },
  ]

  return (
    <>
      <header className="fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <Link 
              href="/" 
              className="text-xl font-bold tracking-wider"
            >
              RZ
            </Link>
            
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                className="hover:bg-transparent"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col"
          >
            <div className="container mx-auto px-4">
              <div className="flex justify-end py-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-transparent"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center justify-center min-h-[80vh] gap-8"
              >
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * (i + 1) }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-4xl font-light tracking-wider hover:text-black/60 dark:hover:text-white/60 transition-colors",
                        pathname === item.href
                          ? "text-black dark:text-white"
                          : "text-black/60 dark:text-white/60"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}