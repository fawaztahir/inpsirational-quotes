import { json } from "@remix-run/node";
import { useLoaderData, useNavigation, Form } from "@remix-run/react";

const requestQuote = async () => {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();
    return data;
}

export const loader = async () => {
    const data = await requestQuote();
    return json(data);
}

export const meta = () => {
    return [
        { title: "Inspire yourself with uplifting quotes" },
        { name: "description", content: "Inspire yourself with uplifting quotes" },
    ];
};


export default function Index() {
    const [quote] = useLoaderData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'loading';

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "2.5" }}>
            <div className="grid h-screen place-items-center">
                <figure className="px-8  mx-auto text-center">
                    <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>

                    <blockquote className="text-5xl italic font-medium text-gray-900 dark:text-white">
                        <p>{quote?.q}</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <cite className="font-medium text-gray-900 dark:text-white">- {quote?.a}</cite>
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
