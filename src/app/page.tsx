import Weather from "./components/weather";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="device-screen">
        {/* Next: to stile 'device-screen' as a device screen */}
        <Weather />
      </div>
    </main>
  );
}
