export const meta = () => {
    return [
        { title: "About | Inspirational Quotes" }
    ];
};

export default function About() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "2.5" }}>
            <div className="grid h-screen place-items-center">
                <p className="text-4xl">Build on <a className="underline" href="https://remix.run" target="_blank">remix.run</a></p>
            </div>
        </div>
    );
}