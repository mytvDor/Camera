// import { useState } from 'react'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
import { Facebook ,  Instagram } from 'lucide-react'

export default function Footer() {
  // const [email, setEmail] = useState('')

  // const handleSubmit = (e:any) => {
  //   e.preventDefault()
  //   // In a real application, this would subscribe the user to the newsletter
  //   console.log('Newsletter subscription:', email)
  //   setEmail('')
  // }

  return (
    <footer className="border-t flex flex-wrap justify-center items-center
     border-zinc-700 bg-zinc-900 text-zinc-50">
      <div className="container px-4 py-12 md:py-24">
        <div className=" ml-28 grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-zinc-300">Home</a></li>
              <li><a href="/products" className="hover:text-zinc-300">Products</a></li>
              <li><a href="/events" className="hover:text-zinc-300">Events</a></li>
              <li><a href="/about" className="hover:text-zinc-300">About Us</a></li>
              {/* <li><a href="/blog-resources" className="hover:text-zinc-300">Blog & Resources</a></li> */}
              <li><a href="/contact" className="hover:text-zinc-300">Contact Us</a></li>
            </ul>
          </div>
          <div>
            {/* <h2 className="mb-4 text-lg font-semibold">Legal</h2>
            <ul className="space-y-2"> */}
              {/* <li><a href="/legal#privacy" className="hover:text-zinc-300">Privacy Policy</a></li>
              <li><a href="/legal#terms" className="hover:text-zinc-300">Terms of Service</a></li> */}
              {/* <li><a href="/legal#cookies" className="hover:text-zinc-300">Cookie Policy</a></li>
              <li><a href="/legal#gdpr" className="hover:text-zinc-300">GDPR Compliance</a></li> */}
            {/* </ul> */}
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold">Connect with Us</h2>
            <div className="flex space-x-4">
              {/* <a href="https://facebook.com" className="text-zinc-400 hover:text-zinc-100">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" className="text-zinc-400 hover:text-zinc-100">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a> */}
              <a href="https://www.facebook.com/swisscophoto/photos" className="text-zinc-400 hover:text-zinc-100">
                <Facebook  className="h-6 w-6" />
                <span className="sr-only"></span>
              </a>
              <a href="https://www.instagram.com/swissco_photo/" className="text-zinc-400 hover:text-zinc-100">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              {/* <a href="https://github.com" className="text-zinc-400 hover:text-zinc-100">
                <GitHub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a> */}
            </div>
          </div>
          {/* <div>
            <h2 className="mb-4 text-lg font-semibold">Stay Updated</h2>
            <p className="mb-4 text-sm text-zinc-400">Subscribe to our newsletter for the latest updates and offers.</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-800 border-zinc-700 text-zinc-100"
              />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div> */}
        </div>
        <div className="mt-12 border-t border-zinc-700 pt-8 text-center">
          <p className="text-sm text-zinc-400">
            © 2003 Swissco. All rights reserved. Swissco is a registered trademark.
          </p>
        </div>
      </div>
    </footer>
  )
}