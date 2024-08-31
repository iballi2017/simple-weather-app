import Weather from "./pages/Weather/Weather";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2">
      <div className="w-full max-w-sm mx-auto">
        <div className="min-h-[700px] overflow-auto bg-gradient-to-r from-white to-[#FEE3BC] border-6 shadow border-8 border-white rounded-3xl p-2 lg:p-4">
          <Weather />
        </div>
      </div>
    </main>
  );
}
