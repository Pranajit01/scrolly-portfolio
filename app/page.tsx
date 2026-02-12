import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import ProfileDetails from "@/components/ProfileDetails";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#121212]">
            <ScrollyCanvas />
            <ProfileDetails />
            <Projects />
        </main>
    );
}
