"use client"

import { Button } from "@/components/ui/button"
import { SendHorizonal, User2, MessageCircleWarning, Loader } from "lucide-react"
import { useState } from "react"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && message.trim()) {
      alert("Xabaringiz yuborildi!")
      setName("")
      setMessage("")
    } else {
      alert("Iltimos, barcha maydonlarni to‘ldiring.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-sky-400">Contact</h2>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md space-y-6">
        <div className="bg-slate-50 relative dark:bg-slate-700 p-4 rounded-md text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
          <p>
            <MessageCircleWarning className="text-yellow-500 absolute -top-2 -left-2 my-1" size={30}/>
            Please make sure your name and message are complete before sending. If you would like me to contact you, you can give me the option to contact you in the message! Messages sent will be used to contact you and will not be passed on to any third party.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 text-sky-400 font-medium flex items-center gap-1">
              <User2 size={16} /> Firstname
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ismingizni kiriting"
              className="w-full px-4 py-2 border focus:border-none rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
          </div>

          <div>
            <label className="mb-1 text-sky-400 font-medium flex items-center gap-1">
              <SendHorizonal size={16} /> Your message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Xabaringizni shu yerga yozing..."
              rows={5}
              className="w-full px-4 border focus:border-none py-2 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-6 rounded-md font-semibold transition"
          >
            Xabarni Yuborish
            {/* <Loader className="animate-spin h-5 w-5" /> */}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
