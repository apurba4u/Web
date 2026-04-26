import dns from 'node:dns'
dns.setServers(['8.8.8.8','8.8.4.4'])

import { NextResponse } from "next/server"
import { auth } from "./lib/auth"
import { headers } from "next/headers"

 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {

  // ei code er maddome amra current session ta pabo
  const session = await auth.api.getSession({
        headers: await headers()
    })

  if(session) {
    // next page e jete thakbe
    return NextResponse.next()
  } else {
    // login nah takle direct login page e niye jabe
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  // amra er modde kun page gulake private korte chai setake rakhi
  // career,/news/:id*  route e thakakalin function ta trigger hobe
  matcher: ['/career', '/news/:id*'],
}