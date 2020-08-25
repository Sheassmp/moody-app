import '../styles/global.css';
import useSWR from 'swr';

export default function App({ Component, pageProps }) {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } =  useSWR('/api/maramataka', fetcher);
      
    if (error) { console.log(error)}

    if (!data) {
        return <div>Loading....</div>
    } else {
        
        return <Component {...data} {...pageProps}  />
    }

}
