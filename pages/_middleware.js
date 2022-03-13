import {NextRequest, NextResponse} from 'next/server'
import store from "../store";

export function middleware(NextRequest) {
    const response = NextResponse.next()

    // if(!store.user) {
    //     if(NextRequest.nextUrl.pathname !== '/login') {
    //         return NextResponse.redirect('http://localhost:3000/login')
    //     }
    // }

    return response
}