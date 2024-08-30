import Weather from "./pages/weather";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2">
      <div className="w-full max-w-sm mx-auto">
        <div className="min-h-[600px]  bg-gradient-to-r from-white to-[#FEE3BC] border-6 shadow border-4 border-white rounded-md p-2 lg:p-4">
          <Weather />
        </div>
      </div>
    </main>
  );
}
