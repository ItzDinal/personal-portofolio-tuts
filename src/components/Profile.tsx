import { Button } from "@/components/ui/button"

/**
 * Constants
 */
import { socialLinks } from "@/constants"
export const Profile = () => {
    return (
    <aside className="max-w-2xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96">
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-x-10">
                <h1 className="text-3xl font-bold">Dinal</h1>
                <p className="text-sm">Data Scientist & ML Engineer</p>

            </div>
            <img 
                src="/profile.jpg" 
                alt="Dinal"
                className="lg:w rounded-2xl object-cover" 
            />

            <div className="mt-6">
                <p className="text-sm text-neutral-300">Specialization:</p>

                <p className="text-lg capitalize"> DataScience & AI/ML</p>
            </div>

            <div className="mt-6">
                <p className="text-sm text-neutral-300">Based in:</p>

                <p className="text-lg capitalize"> Based in Kelaniya, Sri Lanka</p>
            </div>
            <div className="flex gap-3 pt-2 text-neutral-500">
                {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                        <a 
                            key={i}
                            href={social.link}
                        ></a>
                    )
                })}
            </div>
        </div>
    </aside>
    );
}