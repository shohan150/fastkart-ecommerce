import acceptLanguage from 'accept-language';
import { NextResponse } from "next/server";
import { fallbackLng, languages } from "./app/i18n/settings";

//acceptLanguage is a library to parse and handle language preferences from HTTP headers. 
//The acceptLanguage.languages(languages) method is used to recognize the supported languages list from i18n.
acceptLanguage.languages(languages);

//checks for a cookie named i18next to determine the user's language preference. If the cookie is not present, it falls back to the acceptLanguage from the request header using the accept-language library. If neither is available, it defaults to fallbackLng from i18n.
const cookieName = 'i18next'

export async function middleware(request) {
    const path = request.nextUrl.pathname;
    let lng
    if (request.cookies.has(cookieName)) lng = acceptLanguage.get(request.cookies.get(cookieName).value)
    if (!lng) lng = acceptLanguage.get(request.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLng;

    //check if the the whole application is in maintenance mode. the application may be in maintenance mode for a while. on each request first verify if the application is in maintenance mode. if, so redirect every request to the maintenance page.
    //checks if a maintenance cookie is present (sent with the request from client to the server) and if the current path is not already on the maintenance page. r cookie present na thakle to pera e nai. karon cookie set hoi server theke client e. sejonno cookie thakle etake execute koro. server er maintenance shes hoye gele, server theke ei cookie ta empty kore dibe. tokhon .get() diye value pabe na ebong cookie tai delete kore dibe. 
    if (request.cookies.has("maintenance") && path !== `/${lng}/maintenance`) {
        // If so, it fetches the maintenance settings.creates a new Headers  object and appends an Authorization header using a token from the uat cookie. Sends a GET request to the server's settings endpoint (production-url/settings) to check if the application is in maintenance mode.
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${request.cookies.get("uat")?.value}`);
        let requestOptions = {
            method: "GET",
            headers: myHeaders,
        };

        let data = await (await fetch(process.env.API_PROD_URL + "settings", requestOptions))?.json();

        //If the server responds that maintenance mode is active, it redirects the user to the maintenance page.
        if (data?.values?.maintenance?.maintenance_mode && path !== `/${lng}/maintenance`) {
            return NextResponse.redirect(new URL(`/${lng}/maintenance`, request.url));
        } else {
            //The .has() method is used to check if the "maintenance" cookie exists. This is a boolean check to determine if the cookie is present in the request. The .get() method is used to retrieve the value of the "maintenance" cookie. If maintenance cookie exists with the request, let it pass and redirect the user go to his intended page.
            if (request.cookies.get("maintenance")) {
                return NextResponse.next();
            } else {
                //as the request has a cookie named 'maintenance' but has no value, ensure that the maintenance cookie is deleted and redirects to the intended page.
                //redundant: const response = NextResponse.next();
                response.cookies.delete('maintenance');
                return NextResponse.redirect(new URL(`/`, request.url));
            }
        }
    }

    if (request.headers.get("x-redirected")) {
        // Request is already redirected as mentioned on the request header, skip middleware.
        return NextResponse.next();
    }

    // Redirect if lng in path is not supported
    // If the requested path does not start with a supported language code and is not a Next.js  internal path (like _next), it redirects to the same path prefixed with the determined language.
    if (
        !languages.some(loc => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !request.nextUrl.pathname.startsWith('/_next')
    ) {
        return NextResponse.redirect(new URL(`/${lng}${request.nextUrl.pathname}`, request.url))
    }

    // If the request has a referer header, it checks if the referer URL contains a language code. If it does, it sets the i18next cookie to this language.
    if (request.headers.has('referer')) {
        const refererUrl = new URL(request.headers.get('referer'))
        const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
        const response = NextResponse.next()
        if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
        return response
    }

}

// The config object specifies that this middleware should apply to all paths except for API routes, static files, images, and the favicon.
//previous code that restricts access to the public folder.
// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
// code from support team. 
// applies to all routes except the exclusions /api, /_next/static, /_next/image, or are the favicon.ico file and includes routes starting with /assets and /images.
//need to be incestigated exactly what is going on here and what are there these routes actually. 
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)|/assets|/images'],
};
