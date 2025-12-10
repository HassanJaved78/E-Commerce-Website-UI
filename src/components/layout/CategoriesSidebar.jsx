
const cat = ["Woman's Fashion","Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty"];

export default function CategoriesSidebar() {
    return (
        <aside className="min-w-44 hidden overflow-y-auto md:flex w-1/5 border-r border-black/20">
            <div className="h-full">
                <ul className="h-full flex flex-col justify-between gap-1 font-serif 2xl: py-2">
                    {cat.map((category, index) => (
                        <li className="cursor-pointer hover:underline hover:tracking-wide underline-offset-2" key={index}>{category}</li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}