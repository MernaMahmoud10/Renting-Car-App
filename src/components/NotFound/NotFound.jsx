import React from 'react'
import style from "./NotFound.module.css"

export default function NotFound() {
    return (
        <div className={`vh-100 d-flex align-items-center justify-content-center ${style?.notFound}`}>
            <div className={`bg-white card rounded-2 w-75 ${style?.card}`}>
                <h3 className='fw-bold'>Page not found</h3>
                <p className='mb-0'>Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site.</p>
                <hr />
                <p className={style?.yourSite}>
                    If this is your site, and you weren’t expecting a 404 for this path,
                    please visit Netlify’s
                    <a href="https://answers.netlify.com/t/support-guide-i-ve-deployed-my-site-but-i-still-see-page-not-found/125?utm_source=404page&amp;utm_campaign=community_tracking">“page not found” support guide</a>
                    for troubleshooting tips.
                </p>
            </div>
        </div>
    )
}
