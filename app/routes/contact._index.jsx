export const meta = () => {
    return [
        { title: "Contact | Inspirational Quotes" }
    ];
};

export default function Contact() {
    const contacts = [
        { site: 'site', handle: 'fawazt.com', url: 'mailto:fawaz.cb@gmail.com', target: '_blank' },
        { site: 'fawaz.cb', handle: 'gmail.com', url: 'mailto:fawaz.cb@gmail.com', target: '_self' },
        { site: 'linkedin', handle: 'fawaz-tahir88', url: 'https://linkedin.com/in/fawaz-tahir88', target: '_blank' },
        { site: 'github', handle: 'fawaztahir', url: 'https://github.com/fawaztahir', target: '_blank' },
        { site: 'twitter', handle: 'FawazTahir88', url: 'https://twitter.com/FawazTahir88', target: '_blank' },
        { site: 'skype', handle: 'fawaz.00', url: 'skype:fawaz.00?chat', target: '_self' },
    ];


    return (
        <div style={{ fontFamily: "monospace, sans-serif", lineHeight: "2.5" }}>
            <div className="grid h-screen place-items-center">
                <div class="flex flex-col border-gray-600 border-t-2">
                    {contacts.map(contact => (
                        <p key={contact.site} className="lg:text-4xl text-xl border-b-2 text-center border-gray-600">
                            <a className="block py-6 px-3 text-gray-300 w-full hover:bg-gray-700 hover:text-white" href={contact.url} target={contact.target}>{`${contact.site}@${contact.handle}`}</a>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}