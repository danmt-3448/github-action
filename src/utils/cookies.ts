interface CookieOptions {
  expires?: number | Date
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'Strict' | 'Lax' | 'None'
}

export const cookies = {
  set: (name: string, value: string, options: CookieOptions = {}): void => {
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

    if (options.expires) {
      if (typeof options.expires === 'number') {
        const days = options.expires
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        options.expires = date
      }
      cookie += `;expires=${options.expires.toUTCString()}`
    }

    if (options.path) cookie += `;path=${options.path}`
    if (options.domain) cookie += `;domain=${options.domain}`
    if (options.secure) cookie += ';secure'
    if (options.sameSite) cookie += `;samesite=${options.sameSite}`

    document.cookie = cookie
  },

  get: (name: string): string | null => {
    const nameEQ = encodeURIComponent(name) + '='
    const cookies = document.cookie.split(';')

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i]
      while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length)
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length))
      }
    }
    return null
  },

  remove: (name: string, options: CookieOptions = {}): void => {
    cookies.set(name, '', { ...options, expires: new Date(0) })
  }
}
