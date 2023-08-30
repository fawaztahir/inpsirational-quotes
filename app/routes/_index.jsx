import { json } from "@remix-run/node";
import { useLoaderData, useNavigation, Form } from "@remix-run/react";

const requestQuote = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
            'X-Api-Key': '70fGf/oMLYWBq+Na9Z9Bhg==k7zXvnWRrBSMDKW6'
        }
    });
    const data = await response.json();
    const [quote] = data;
    return [{
        q: quote.quote,
        a: quote.author
    }];
}

export const loader = async () => {
    const data = await requestQuote();
    return json(data);
}

export default function Index() {
    const [quote] = useLoaderData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'loading';

    const shareOnTwitter = () => {
        const text = `"${quote?.q}" — ${quote?.a}`;
        const url = `https://twitter.com/intent/tweet?text=${text}&via=FawazTahir88&related=FawazTahir88`;
        const positionLeft = (window.screen.width / 2) - 300;
        const positionTop = (window.screen.height / 2) - 150;
        window.open(url, 'share-on-twitter', `top=${positionTop},left=${positionLeft},width=600,height=300`);
    }

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "2.5" }}>
            <div className="grid h-screen place-items-center">
                <figure className="px-8 mx-auto text-center transition-all" style={{opacity: isSubmitting ? 0.5 : 1, cursor: 'default'}}>
                    <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>

                    <blockquote className="text-xl md:text-5xl italic font-medium text-gray-900 dark:text-white leading-normal px-6">
                        <p dangerouslySetInnerHTML={{__html: quote?.q}}></p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite className="font-medium text-gray-900 dark:text-white pr-3"> &mdash; {quote?.a}</cite>
                            <div className="flex items-center">
                                <button onClick={shareOnTwitter} title="Share on Twitter" className="p-3 mx-3 inline-block rounded-full" disabled={isSubmitting} style={{backgroundColor: '#1da1f2'}}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </figcaption>
                </figure>

            </div>

            <footer className="sticky pb-12 bottom-0 text-center">
                <Form>
                    <button disabled={isSubmitting} className="disabled:opacity-75 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        {isSubmitting ? 'Fetching ...' : 'Get another'}
                    </button>
                </Form>
            </footer>
        </div>
    );
}
