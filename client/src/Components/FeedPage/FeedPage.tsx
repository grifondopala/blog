import * as React from 'react'

import './FeedPage.css'

interface FeedPageProps{
    readonly myLogin: string;
}

export function FeedPage(props: FeedPageProps){

    return(
        <div>
            <div id={'mainFeedPageDiv'}>
                <div id={'titleFeedPageDiv'}>
                    <p id={'titleTextFeedPage'}>Последние посты ваших друзей</p>
                </div>
            </div>
        </div>
    )

}