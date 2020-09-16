import React, {useEffect} from 'react';
import '../styles/global.css';
import useSWR from 'swr';
import {firebaseCloudMessaging} from '../webpush';


export default function App({ Component, pageProps }) {

    useEffect(() => {
        setToken();

        async function setToken() {
            try {
                const token = await firebaseCloudMessaging.init();
                if(token) {
                    getMessage();
                }
            } catch (error) {
                console.log(error);
            }
        }

        function getMessage() {
            const messaging = firebase.messaging();
            messaging.onMessage((message) => console.log('foreground', message));
        }
    }, []);


    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } =  useSWR('/api/maramataka', fetcher);
      
    if (error) { console.log(error)}

    if (!data) {
        return <div>Loading....</div>
    } else {
        
        return <Component {...data} {...pageProps}  />
    }

}
