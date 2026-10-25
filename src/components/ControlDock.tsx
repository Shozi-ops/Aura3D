export default function ControlDock() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200 flex gap-4">
      <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium">Upload Selfie</button>
      <button className="px-4 py-2 bg-slate-100 text-slate-900 rounded-lg text-sm font-medium">Generate Avatar</button>
    </div>
  );
}
