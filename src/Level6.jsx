import ProfileCard from "./components/ProfileCard";

// The Parent Component rendering the list
export default function Level6() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Level 6: React Reusability
          </h1>
          <p className="text-gray-600">
            One component definition, multiple instances. Data drives the UI.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <ProfileCard name="Jane Doe" role="Frontend Developer" />
          <ProfileCard name="John Smith" role="Backend Engineer" />
          <ProfileCard name="Alice Johnson" role="UI/UX Designer" />
        </div>
      </div>
    </div>
  );
}
