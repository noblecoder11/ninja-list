import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])
    
    return (
        <>
            <Head>
                <title>Ninja List - Error</title>
                <meta name="keywords" content="ninjas next"></meta>
            </Head>
            <div className="not-found">
                <h1>Ooops...</h1>
                <h2>That page can't be found.</h2>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </>
     );
}
 
export default NotFound;